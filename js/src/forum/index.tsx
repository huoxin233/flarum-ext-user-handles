import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/forum/components/PostUser';
import UserCard from 'flarum/forum/components/UserCard';
import type ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';
import UserHandle from './components/UserHandle';

app.initializers.add('huoxin-user-handles', () => {
  extend(PostUser.prototype, 'linkChildren', function (items: ItemList<Mithril.Children>, user: User) {
    const showOnPost = app.forum.attribute<boolean>('userHandlesShowOnPost') ?? true;
    if (!showOnPost) return;

    items.add('user-handle', <UserHandle user={user} className="PostUser-handle" />, 75);
  });

  extend(UserCard.prototype, 'contentItems', function (this: UserCard, items: ItemList<Mithril.Children>) {
    const showOnCard = app.forum.attribute<boolean>('userHandlesShowOnCard') ?? true;
    if (!showOnCard) return;

    const user: User | null | undefined = this.attrs.user;
    if (!user) return;

    const identityNode = items.get('identity') as Mithril.Vnode<Mithril.Attributes> | undefined;
    if (!identityNode) return;

    const handleNode = <UserHandle user={user} className="UserCard-handle" />;

    if (!Array.isArray(identityNode.children)) {
      identityNode.children = identityNode.children ? [identityNode.children] : [];
    }

    identityNode.children.push(handleNode);
  });
});
