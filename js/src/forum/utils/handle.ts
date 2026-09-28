import type User from 'flarum/common/models/User';

/**
 * Checks whether a user has a distinct nickname compared to their username.
 *
 * @param user The user model to inspect
 * @param ignoreCase Whether to ignore case differences (e.g. 'Alice' vs 'alice')
 * @returns boolean
 */
export function hasDistinctHandle(user: User | null | undefined, ignoreCase: boolean = false): boolean {
  if (!user) return false;

  const username = (user.username() || '').trim();
  const displayName = (user.displayName() || '').trim();

  if (!username || !displayName) return false;

  return ignoreCase ? username.toLowerCase() !== displayName.toLowerCase() : username !== displayName;
}

/**
 * Formats the raw username using the configured template.
 *
 * @param username The raw user handle / username
 * @param template Format string containing {username}, defaults to '@{username}'
 * @returns Formatted handle string
 */
export function formatHandle(username: string, template?: string | null): string {
  const safeTemplate = template && template.includes('{username}') ? template : '@{username}';

  return safeTemplate.replace(/\{username\}/g, username);
}
