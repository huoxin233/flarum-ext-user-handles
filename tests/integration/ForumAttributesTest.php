<?php

/*
 * This file is part of huoxin/user-handles.
 *
 * Copyright (c) 2026 huoxin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Huoxin\UserHandles\Tests\integration;

use Flarum\Testing\integration\TestCase;
use Illuminate\Support\Arr;

class ForumAttributesTest extends TestCase
{
    /**
     * @inheritDoc
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('huoxin-user-handles');
    }

    /**
     * @test
     */
    public function forum_endpoint_returns_default_handles_settings()
    {
        $response = $this->send(
            $this->request('GET', '/api')
        );

        $this->assertEquals(200, $response->getStatusCode());

        $json = json_decode($response->getBody()->getContents(), true);
        $attributes = Arr::get($json, 'data.attributes');

        $this->assertEquals('@{username}', Arr::get($attributes, 'userHandlesFormat'));
        $this->assertFalse(Arr::get($attributes, 'userHandlesIgnoreCase'));
        $this->assertTrue(Arr::get($attributes, 'userHandlesShowOnPost'));
        $this->assertTrue(Arr::get($attributes, 'userHandlesShowOnCard'));
    }

    /**
     * @test
     */
    public function custom_settings_are_serialized_properly()
    {
        $this->setting('huoxin-user-handles.format', '(@{username})');
        $this->setting('huoxin-user-handles.ignore_case', true);
        $this->setting('huoxin-user-handles.show_on_post', false);
        $this->setting('huoxin-user-handles.show_on_card', false);

        $response = $this->send(
            $this->request('GET', '/api')
        );

        $this->assertEquals(200, $response->getStatusCode());

        $json = json_decode($response->getBody()->getContents(), true);
        $attributes = Arr::get($json, 'data.attributes');

        $this->assertEquals('(@{username})', Arr::get($attributes, 'userHandlesFormat'));
        $this->assertTrue(Arr::get($attributes, 'userHandlesIgnoreCase'));
        $this->assertFalse(Arr::get($attributes, 'userHandlesShowOnPost'));
        $this->assertFalse(Arr::get($attributes, 'userHandlesShowOnCard'));
    }
}
