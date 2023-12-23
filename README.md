# Connections project with real backend

App where you and your friends or colleagues can communicate in groups or dialogues.

- Deploy: https://vladtarnovskiy.github.io/Connections/

## Application structure

1. Registration
2. Login
3. Profile
4. People and group sections
5. Group dialog
6. People conversation
7. 404 page

## Dev stack

1. TypeScript
2. Angular
3. NgRx
4. RxJS
5. Tailwind

## Registration

- page with dedicated url
- validation for _name_ and _email_ fields with error messages
- validation for _password_ field with error messages
- redirection to sign-in page after successful registration
- toast messages with appropriate text are displayed if http-request fails or
  succeed
- _Submit_ button is disabled (user cannot click it) after clicking while http-request is in
  progress

## Login

- default page for unauthorized user
- validation for _email_ field with error messages
- validation for _password_ field with error messages
- redirection to the main page after successful authentication
- toast messages with appropriate text are displayed if http-request fails or
  succeed
- _Submit_ button is disabled (user cannot click it) if form is invalid. Also, it should be disabled
  after http error with type `NotFoundException` until the user changes `email` or `password` field
  value
- _Submit_ button is disabled (user cannot click it) after clicking while http-request is in
  progress
- `token`, `uid` and `email` value is saved in `localStorage` after successful sign in and used
  again in the following http-requests even after page reloading (it allows user to omit
  sign in again after page reloading)

## Profile

- `user id`, `email`, `creation time`, `user name` data of current user is displayed
  on the page
- error message with appropriate text are displayed on the page if loading http-request fails
  (for instance, if internet connection is lost)
- button _Edit_ makes `name` field editable
- button _Cancel_ returns initial page state (static appearance)
- clicking the button _Save_ sends 1 http-request to save new data without the ability to click it
  again (along with _Cancel_ button) until process is end
- buttons _Cancel_ and _Save_ are visible ony for editable form
- button _Edit_ is visible only for static page
- toast messages with appropriate text are displayed if http-request fails or
  succeed

## Logout

- clicking on `Logout` button the http-request is sent
  with `DELETE` method
- user is redirected to Sign-In page after successful logout process
- all data in `localStorage` is deleted
- toast messages with appropriate text are displayed if http-request fails or
  succeed

## People & Groups

#### Group section (left)

- the list of available groups is loaded if user opens this page first time
- the list item created by current user should contain _Delete_ button
- the confirmation modal appears after clicking on _Delete_ button on list item with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and item is removed from the list after succeeded response
- clicking on _Update_ button sends corresponding http-request and update group
  list if succeeded
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs)
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active
- clicking on _Create_ button the modal window is opened. There is form with validation and
  submit button
- submit button in modal window should be disabled (user cannot click it) until form
  is valid
- clicking on submit button in modal window the appropriate http-request is sent to create new
  group. Modal window is closed only if http-request succeeded
- toast messages with appropriate text are displayed if http-request fails or
  succeed
- clicking on list item the user is redirected to group dialog page

#### People list (right)

- the list of people is loaded if user opens this page first time
- the list item with which current user already has active conversation has
  special background
- clicking on _Update_ button sends corresponding http-request and update people list
  if succeeded
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs)
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active
- clicking on list item the user is redirected to personal conversation page. New conversation (via
  certain http-request) is created if it has not already created before transition

## Group dialog

- the page is protected by a guard only for authorized user
- the error message is displayed if group with provided id does not exist
- _Return back_ is a link, not a button
- the full message history is loaded if user visit this page first time
- only the last messages (using `since` parameter) are loaded if user clicks on
  _Update_ button
- messages in corresponding area are sorted by time. New messages are appended at
  the bottom
- message item contains readable time, user name and text. Own messages are displayed on the right.
  Other messages are displayed on the left
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs)
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active
- group is created by current user should contain _Delete_ button
- the confirmation modal appears after clicking on _Delete_ button with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and the user is redirected to main page after succeeded
  response
- form field has `required` validator. _Send new message_ button is disabled (user cannot click it)
  until field has text
- new messages are loaded (using `since` parameter) after successful sending
  new message

## Person conversation

- the page is protected by a guard only for authorized user
- the error message is displayed if conversation with provided id does not exist
- _Return back_ is a link, not a button
- the full message history is loaded if user visit this page first time
- only the last messages (using `since` parameter) are loaded if user clicks on
  _Update_ button
- messages in corresponding area are sorted by time. New messages are appended at
  the bottom
- message item contains readable time, user name and text. Own messages are displayed on the right.
  Other messages are displayed on the left
- countdown appears for 1 minute after clicking on _Update_ button
  (except if error occurs)
- _Update_ button is disabled (user cannot click it) after clicking during updating and until the
  timer is active
- the confirmation modal appears after clicking on _Delete_ button with _Cancel_,
  _Delete_ button inside. If user clicks _Cancel_ the modal disappears. If user clicks _Delete_ the
  http-request is sent and the user is redirected to main page after succeeded
  response
- form field has `required` validator. _Send new message_ button is disabled (user cannot click it)
  until field has text
- new messages are loaded (using `since` parameter) after successful sending
  new message

## 404 page

- error message is displayed about wrong url/page

## Dark/Light theme

- chosen state is saved in `localStorage` and used/applied after reloading. User can refresh the
  page and see the same theme
- light/dark styles are applied to main page
- light/dark styles are applied to group dialog page
- light/dark styles are applied to personal conversation page
