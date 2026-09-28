# User Handles

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/huoxin/user-handles.svg)](https://packagist.org/packages/huoxin/user-handles) [![Total Downloads](https://img.shields.io/packagist/dt/huoxin/user-handles.svg)](https://packagist.org/packages/huoxin/user-handles)

A [Flarum](https://flarum.org) extension that displays `@username` handles alongside display names / nicknames across the forum.

## Features

- **Dual Identity Display**: Prominently shows both nickname and `@username` handle.
- **Zero Redundancy**: If a user's nickname is the same as their username, only the single name is rendered.
- **Customizable Format**: Admins can customize the handle template in the admin settings using `{username}` (e.g., `@{username}`, `(@{username})`, `[{username}]`).
- **Capitalization Differences Option**: Toggle whether case-only differences (e.g. `Alice` vs `alice`) should be treated as identical.
- **Independent Location Toggles**: Choose whether to display handles in post author headers, user cards & profile banners, or both.
- **Native & Responsive**: Clean typography using Flarum's native LESS variables with responsive breakpoints for mobile screens.
- **Secure & Lightweight**: Native text rendering with zero raw HTML. Zero database migrations needed.

## Configuration

In your **Flarum Admin Area > Extensions > User Handles**:

| Setting | Description | Default |
|---|---|---|
| **Handle Format Template** | Template for formatting the handle. Use `{username}` as placeholder. | `@{username}` |
| **Ignore capitalization differences** | When enabled, names differing only by case (e.g., `Alice` and `alice`) are treated as identical and hide the handle. | `Off` |
| **Display on Posts** | Show user handles beside nicknames in post author headers. | `On` |
| **Display on User Cards** | Show user handles on hover profile cards and hero profile banners. | `On` |

## Installation

Install with composer:

```sh
composer require huoxin/user-handles:"*"
```

## Updating

```sh
composer update huoxin/user-handles:"*"
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/huoxin/user-handles)
- [GitHub](https://github.com/huoxin233/flarum-ext-user-handles)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
