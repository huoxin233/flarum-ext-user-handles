import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('huoxin-user-handles', () => {
  app.extensionData
    .for('huoxin-user-handles')
    .registerSetting({
      setting: 'huoxin-user-handles.format',
      type: 'text',
      label: app.translator.trans('huoxin-user-handles.admin.settings.format_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.format_help'),
      placeholder: '@{username}',
      default: '@{username}',
    })
    .registerSetting({
      setting: 'huoxin-user-handles.ignore_case',
      type: 'boolean',
      label: app.translator.trans('huoxin-user-handles.admin.settings.ignore_case_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.ignore_case_help'),
      default: false,
    })
    .registerSetting({
      setting: 'huoxin-user-handles.show_on_post',
      type: 'boolean',
      label: app.translator.trans('huoxin-user-handles.admin.settings.show_on_post_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.show_on_post_help'),
      default: true,
    })
    .registerSetting({
      setting: 'huoxin-user-handles.show_on_card',
      type: 'boolean',
      label: app.translator.trans('huoxin-user-handles.admin.settings.show_on_card_label'),
      help: app.translator.trans('huoxin-user-handles.admin.settings.show_on_card_help'),
      default: true,
    });
});
