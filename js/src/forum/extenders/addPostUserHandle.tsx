import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/forum/components/PostUser';
import type ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';
import UserHandle from '../components/UserHandle';

export default function addPostUserHandle(): void {
  extend(PostUser.prototype, 'linkChildren', function (items: ItemList<Mithril.Children>, user: User) {
    const showOnPost = app.forum.attribute<boolean>('userHandlesShowOnPost') ?? true;
    if (!showOnPost) return;

    items.add('user-handle', <UserHandle user={user} className="PostUser-handle" />, 75);
  });
}
