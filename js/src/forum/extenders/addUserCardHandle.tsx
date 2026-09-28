import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';
import UserHandle from '../components/UserHandle';

/**
 * Recursively search a virtual DOM node tree for an element with a specific CSS class.
 */
function findVnodeByClass(vnode: unknown, targetClass: string): Mithril.Vnode<Mithril.Attributes> | null {
  if (!vnode || typeof vnode !== 'object') return null;

  const candidate = vnode as Mithril.Vnode<Mithril.Attributes>;
  const className = candidate.attrs?.className;
  if (typeof className === 'string' && className.split(' ').includes(targetClass)) {
    return candidate;
  }

  if (Array.isArray(candidate.children)) {
    for (const child of candidate.children) {
      const found = findVnodeByClass(child, targetClass);
      if (found) return found;
    }
  } else if (candidate.children && typeof candidate.children === 'object') {
    return findVnodeByClass(candidate.children, targetClass);
  }

  return null;
}

export default function addUserCardHandle(): void {
  extend(UserCard.prototype, 'view', function (this: UserCard, vnode: Mithril.Vnode<Mithril.Attributes>) {
    const showOnCard = app.forum.attribute<boolean>('userHandlesShowOnCard') ?? true;
    if (!showOnCard) return;

    const user: User | null | undefined = this.attrs.user;
    if (!user) return;

    const identityNode = findVnodeByClass(vnode, 'UserCard-identity');
    if (!identityNode) return;

    const handleNode = <UserHandle user={user} className="UserCard-handle" />;

    if (!Array.isArray(identityNode.children)) {
      identityNode.children = identityNode.children ? [identityNode.children] : [];
    }

    identityNode.children.push(handleNode);
  });
}
