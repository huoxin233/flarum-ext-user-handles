import app from 'flarum/forum/app';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import classList from 'flarum/common/utils/classList';
import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';
import { hasDistinctHandle, formatHandle } from '../../common/utils/handle';

export interface IUserHandleAttrs extends ComponentAttrs {
  user: User | null | undefined;
  className?: string;
  format?: string;
  ignoreCase?: boolean;
}

export default class UserHandle extends Component<IUserHandleAttrs> {
  view(): Mithril.Children {
    const user = this.attrs.user;
    const ignoreCase = this.attrs.ignoreCase ?? app.forum.attribute<boolean>('userHandlesIgnoreCase') ?? false;

    if (!user || !hasDistinctHandle(user, ignoreCase)) {
      return null;
    }

    const username = user.username();
    if (!username) {
      return null;
    }

    const template = this.attrs.format ?? app.forum.attribute<string>('userHandlesFormat');
    const formatted = formatHandle(username, template);

    return <span className={classList('UserHandle', this.attrs.className)}>{formatted}</span>;
  }
}
