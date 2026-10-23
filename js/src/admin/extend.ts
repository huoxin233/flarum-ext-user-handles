import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: 'huoxin-user-handles.format',
      type: 'text',
      label: app.translator.trans('huoxin-user-handles.admin.settings.format_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.format_help'),
      placeholder: '@{username}',
      default: '@{username}',
    }))
    .setting(() => ({
      setting: 'huoxin-user-handles.ignore_case',
      type: 'boolean',
      label: app.translator.trans('huoxin-user-handles.admin.settings.ignore_case_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.ignore_case_help'),
      default: false,
    }))
    .setting(() => ({
      setting: 'huoxin-user-handles.show_on_post',
      type: 'boolean',
      label: app.translator.trans('huoxin-user-handles.admin.settings.show_on_post_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.show_on_post_help'),
      default: true,
    }))
    .setting(() => ({
      setting: 'huoxin-user-handles.show_on_card',
      type: 'boolean',
      label: app.translator.trans('huoxin-user-handles.admin.settings.show_on_card_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.show_on_card_help'),
      default: true,
    })),
];
