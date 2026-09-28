import Component, { ComponentAttrs } from 'flarum/common/Component';
import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';
export interface IUserHandleAttrs extends ComponentAttrs {
    user: User | null | undefined;
    className?: string;
    format?: string;
    ignoreCase?: boolean;
}
export default class UserHandle extends Component<IUserHandleAttrs> {
    view(): Mithril.Children;
}
