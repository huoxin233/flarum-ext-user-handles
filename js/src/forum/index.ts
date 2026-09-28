import app from 'flarum/forum/app';
import addPostUserHandle from './extenders/addPostUserHandle';
import addUserCardHandle from './extenders/addUserCardHandle';

export { default as extend } from './extend';

app.initializers.add('huoxin-user-handles', () => {
  addPostUserHandle();
  addUserCardHandle();
});
