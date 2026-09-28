<?php

/*
 * This file is part of huoxin/user-handles.
 *
 * Copyright (c) 2026 huoxin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Huoxin\UserHandles;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
        ->default('huoxin-user-handles.format', '@{username}')
        ->default('huoxin-user-handles.ignore_case', false)
        ->default('huoxin-user-handles.show_on_post', true)
        ->default('huoxin-user-handles.show_on_card', true)
        ->serializeToForum('userHandlesFormat', 'huoxin-user-handles.format')
        ->serializeToForum('userHandlesIgnoreCase', 'huoxin-user-handles.ignore_case', 'boolval')
        ->serializeToForum('userHandlesShowOnPost', 'huoxin-user-handles.show_on_post', 'boolval')
        ->serializeToForum('userHandlesShowOnCard', 'huoxin-user-handles.show_on_card', 'boolval'),
];
