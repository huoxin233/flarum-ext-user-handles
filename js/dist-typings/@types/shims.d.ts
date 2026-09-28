import type User from 'flarum/common/models/User';
import 'flarum/forum/components/UserCard';

declare module 'flarum/forum/components/UserCard' {
  export interface IUserCardAttrs {
    user?: User;
    className?: string;
    editable?: boolean;
    controlsButtonClassName?: string;
  }

  export default interface UserCard {
    attrs: IUserCardAttrs;
  }
}
