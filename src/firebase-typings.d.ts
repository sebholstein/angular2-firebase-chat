/**
 * Generated with a couple of manual tweaks from externs/firebase-app-externs.js
 * with the tool at http://fivetran.github.io/typescript-closure-tools/
 */
declare namespace firebase.app {

    interface App {

        /**
          * The (read-only) name (identifier) for this App. '[DEFAULT]' is the name of
          * the default App.
          * @type {string}
          */
        name: string;

        /**
          * The (read-only) configuration options (the original parameters given
          * in <code>firebase.initializeApp()</code>).
          * @type {!Object}
          */
        options: Object;

        /**
          * Make the given App unusable and free the resources of all associated
          * services.
          *
          * @return {!firebase.Promise<void>}
          */
        delete(): firebase.Promise<void>;
    }
}

declare namespace firebase {

    interface Thenable<T> {

        /**
          * Assign callback functions called when the Thenable value either
          * resolves, or is rejected.
          *
          * @param {(function(T): *)=} onResolve Called when the Thenable resolves.
          * @param {(function(!Error): *)=} onReject Called when the Thenable is rejected
          *   (with an error).
          * @return {!firebase.Thenable<*>}
          */
        then(onResolve?: { (_0: T): any }, onReject?: { (_0: Error): any }): firebase.Thenable<any>;

        /**
          * Assign a callback when the Thenable rejects.
          *
          * @param {(function(!Error): *)=} onReject Called when the Thenable is rejected
          *   (with an error).
          * @return {!firebase.Thenable<*>}
          */
        catch(onReject?: { (_0: Error): any }): firebase.Thenable<any>;
    }

    class Promise<T> extends Promise__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Promise__Class<T> implements firebase.Thenable<T>  {

            /**
             * A Promise represents an eventual (asynchronous) value. A Promise should
             * (eventually) either resolve or reject. When it does, it will call all the
             * callback functions that have been assigned via the <code>.then()</code> or
             * <code>.catch()</code> methods.
             *
             * <code>firebase.Promise</code> is the same as the native Promise
             * implementation when available in the current environment, otherwise it is a
             * compatible implementation of the Promise/A+ spec.
             *
             * @template T
             * @constructor
             * @implements {firebase.Thenable}
             * @param {function((function(T): void)=,
             *                  (function(!Error): void)=)} resolver
             */
            constructor(resolver: { (_0: { (_0: T): void }, _1: { (_0: Error): void }): any /*missing*/ });

            /**
             * Assign callback functions called when the Promise either resolves, or is
             * rejected.
             *
             * @param {(function(T): *)=} onResolve Called when the Promise resolves.
             * @param {(function(!Error): *)=} onReject Called when the Promise is rejected
             *   (with an error).
             * @return {!firebase.Promise<*>}
             */
            then(onResolve?: { (_0: T): any }, onReject?: { (_0: Error): any }): firebase.Promise<any>;

            /**
             * Assign a callback when the Promise rejects.
             *
             * @param {(function(!Error): *)=} onReject Called when the Promise is rejected
             *   (with an error).
             */
            catch(onReject?: { (_0: Error): any }): firebase.Promise<any>;
    }


    interface FirebaseError {

        /**
          * Error codes are strings using the following format:
          *
          *   "service/string-code"
          *
          * While the message for a given error can change, the code will remain the same
          * between backward-compatible versions of the Firebase SDK.
          *
          * @type {string}
          */
        code: string;

        /**
          * An explanatory message for the error that just occurred.
          *
          * This message is designed to be helpful to you, the developer.  It
          * is not intended that you display it to the end user of your application
          * (as it will generally not convey meaningful information to them).
          *
          * @type {string}
          */
        message: string;

        /**
          * The name of the class of Errors.
          * @type {string}
          */
        name: string;

        /**
          * A string value containing the execution backtrace when the error originally
          * occured.
          *
          * This information can be useful to you and can be sent to Firebase support to
          * help explain the cause of an error.
          *
          * @type {string}
          */
        stack: string;
    }

    /**
     * Create (and intialize) a FirebaseApp.
     *
     * @param {!Object} options Options to configure the services use in the App.
     * @param {string=} name The optional name of the app to initialize ('[DEFAULT]'
     *     if none)
     * @return {!firebase.app.App}
     */
    function initializeApp(options: Object, name?: string): firebase.app.App;

    /**
     * Retrieve an instance of a FirebaseApp.
     *
     * With no arguments, this returns the default App.  With a single
     * string argument, it returns the named App.
     *
     * This function throws an exception if the app you are trying to access
     * does not exist.
     *
     * Usage: firebase.app()
     *
     * @namespace
     * @param {string} name The optional name of the app to return ('[DEFAULT]' if
     *     none)
     * @return {!firebase.app.App}
     */
    function app(name?: string): firebase.app.App;

    /**
     * A (read-only) array of all the initialized Apps.
     * @type {!Array<firebase.app.App>}
     */
    var apps: firebase.app.App[];

    /**
     * The current SDK version ('3.0.3').
     * @type {string}
     */
    var SDK_VERSION: string;
}

declare namespace firebase.Promise {

    /**
     * Return (an immediately) resolved Promise.
     *
     * @template T
     * @param {T} value The value to be returned by the Promise.
     * @return {!firebase.Promise<T>}
     */
    function resolve<T>(value: T): firebase.Promise<T>;

    /**
     * Return (an immediately) rejected Promise.
     *
     * @param {!Error} error The reason for the Promise being rejected.
     * @return {!firebase.Promise<*>}
     */
    function reject(error: Error): firebase.Promise<any>;

    /**
     * Convert an array of Promises, to a single array of values.
     * <code>Promise.all()</code> resolves only after all the Promises in the array
     * have resolved.
     *
     * <code>Promise.all()</code> rejects when any of the promises in the Array have
     * rejected.
     *
     * @param {!Array<!firebase.Promise<*>>} values
     * @return {!firebase.Promise<!Array<*>>}
     */
    function all(values: firebase.Promise<any>[]): firebase.Promise<any[]>;
}

/**
 * Generated with a couple of manual tweaks from externs/firebase-auth-externs.js
 * with the tool at http://fivetran.github.io/typescript-closure-tools/
 */


declare namespace firebase.auth {

    interface AuthCredential {

        /**
          * The authentication provider ID for the credential.
          * For example, 'facebook.com', or 'google.com'.
           *
           * @type {string}
           */
        provider: string;
    }

    interface ActionCodeInfo {

        /**
          * The email address associated with the action code.
          *
          * @typedef {{
          *   email: string
          * }}
          */
        data: any /*missing*/;
    }

    interface Auth {

        /**
          * The App associated with the Auth service instance.
          *
          * @type {!firebase.app.App}
          */
        app: firebase.app.App;

        /**
          * The currently signed-in user (or null).
          *
          * @type {firebase.User|null}
          */
        currentUser: firebase.User|any /*null*/;

        /**
          * Creates a new user account associated with the specified email address and
          * password.
          *
          * On successful creation of the user account, this user will also be
          * signed in to your application.
          *
          * User account creation can fail if the account already exists or the password
          * is invalid.
          *
          * Note: The email address acts as a unique identifier for the user and
          * enables an email-based password reset.  This function will create
          * a new user account and set the initial user password.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/email-already-in-use</dt>
          * <dd>Thrown if there already exists an account with the given email
          *     address.</dd>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email address is not valid.</dd>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if email/password accounts are not enabled. Enable email/password
          *     accounts in the Firebase Console, under the Auth tab.</dd>
          * <dt>auth/weak-password</dt>
          * <dd>Thrown if the password is not strong enough.</dd>
          * </dl>
          *
          * @param {string} email The user's email address.
          * @param {string} password The user's chosen password.
          * @return {!firebase.Promise<!firebase.User>}
          */
        createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<firebase.User>;

        /**
          * Gets the list of provider IDs that can be used to sign in for the given email
          * address. Useful for an "identifier-first" sign-in flow.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email address is not valid.</dd>
          * </dl>
          *
          * @param {string} email An email address.
          * @return {!firebase.Promise<!Array<string>>}
          */
        fetchProvidersForEmail(email: string): firebase.Promise<string[]>;

        /**
          * Adds an observer for auth state changes.
          *
          * @param {!Object|function(?firebase.User)}
          *     nextOrObserver An observer object or a function triggered on change.
          * @param {function(!firebase.auth.Error)=} opt_error Optional A function
          *     triggered on auth error.
          * @param {function()=} opt_completed Optional A function triggered when the
          *     observer is removed.
          * @return {!function()} The unsubscribe function for the observer.
          */
        onAuthStateChanged(nextOrObserver: Object|{ (_0: firebase.User): any /*missing*/ }, opt_error?: { (_0: firebase.auth.Error): any /*missing*/ }, opt_completed?: { (): any /*missing*/ }): { (): any /*missing*/ };

        /**
          * Sends a password reset email to the given email address.
          *
          * To complete the password reset, call
          * {@link firebase.auth.Auth#confirmPasswordReset} with the code supplied in the
          * email sent to the user, along with the new password specified by the user.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email address is not valid.</dd>
          * <dt>auth/user-not-found</dt>
          * <dd>Thrown if there is no user corresponding to the email address.</dd>
          * </dl>
          *
          * @param {string} email The email address with the password to be reset.
          * @return {!firebase.Promise<void>}
          */
        sendPasswordResetEmail(email: string): firebase.Promise<void>;

        /**
          * Completes the password reset process, given a confirmation code and new
          * password.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/expired-action-code</dt>
          * <dd>Thrown if the password reset code has expired.</dd>
          * <dt>auth/invalid-action-code</dt>
          * <dd>Thrown if the password reset code is invalid. This can happen if the
          *     code is malformed or has already been used.</dd>
          * <dt>auth/user-disabled</dt>
          * <dd>Thrown if the user corresponding to the given password reset code has
          *     been disabled.</dd>
          * <dt>auth/user-not-found</dt>
          * <dd>Thrown if there is no user corresponding to the password reset code. This
          *     may have happened if the user was deleted between when the code was
          *     issued and when this method was called.</dd>
          * <dt>auth/weak-password</dt>
          * <dd>Thrown if the new password is not strong enough.</dd>
          * </dl>
          *
          * @param {string} code The confirmation code send via email to the user.
          * @param {string} newPassword The new password.
          * @return {!firebase.Promise<void>}
          */
        confirmPasswordReset(code: string, newPassword: string): firebase.Promise<void>;

        /**
          * Asynchronously signs in with the given credentials.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/account-exists-with-different-credential</dt>
          * <dd>Thrown if there already exists an account with the email address
          *     asserted by the credential. Resolve this by calling
          *     {@link firebase.auth.Auth#fetchProvidersForEmail} and then asking the
          *     user to sign in using one of the returned providers. Once the user is
          *     signed in, the original credential can be linked to the user with
          *     {@link firebase.User#link}.</dd>
          * <dt>auth/invalid-credential</dt>
          * <dd>Thrown if the credential is malformed or has expired.</dd>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if the type of account corresponding to the credential
          *     is not enabled. Enable the account type in the Firebase Console, under
          *     the Auth tab.</dd>
          * <dt>auth/user-disabled</dt>
          * <dd>Thrown if the user corresponding to the given credential has been
          *     disabled.</dd>
          * <dt>auth/user-not-found</dt>
          * <dd>Thrown if signing in with a credential from
          *     {@link firebase.auth.EmailAuthProvider#credential} and there is no user
          *     corresponding to the given email. </dd>
          * <dt>auth/wrong-password</dt>
          * <dd>Thrown if signing in with a credential from
          *     {@link firebase.auth.EmailAuthProvider#credential} and the password is
          *     invalid for the given email, or if the account corresponding to the email
          *     does not have a password set.</dd>
          * </dl>
          *
          * @param {!firebase.auth.AuthCredential} credential The auth credential.
          * @return {!firebase.Promise<!firebase.User>}
          */
        signInWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<firebase.User>;

        /**
          * Asynchronously signs in using a custom token.
          *
          * Custom tokens are used to integrate Firebase Auth with existing auth systems,
          * and must be generated by the auth backend.
          *
          * Fails with an error if the token is invalid, expired, or not accepted by the
          * Firebase Auth service.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/custom-token-mismatch</dt>
          * <dd>Thrown if the custom token is for a different Firebase App.</dd>
          * <dt>auth/invalid-custom-token</dt>
          * <dd>Thrown if the custom token format is incorrect.</dd>
          * </dl>
          *
          * @param {string} token The custom token to sign in with.
          * @return {!firebase.Promise<!firebase.User>}
          */
        signInWithCustomToken(token: string): firebase.Promise<firebase.User>;

        /**
          * Asynchronously signs in using an email and password.
          *
          * Fails with an error if the email address and password do not match.
          *
          * Note: The user's password is NOT the password used to access the user's email
          * account. The email address serves as a unique identifier for the user, and
          * the password is used to access the user's account in your Firebase project.
          *
          * See also: {@link firebase.auth.Auth#createUserWithEmailAndPassword}.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email address is not valid.</dd>
          * <dt>auth/user-disabled</dt>
          * <dd>Thrown if the user corresponding to the given email has been
          *     disabled.</dd>
          * <dt>auth/user-not-found</dt>
          * <dd>Thrown if there is no user corresponding to the given email.</dd>
          * <dt>auth/wrong-password</dt>
          * <dd>Thrown if the password is invalid for the given email, or the account
          *     corresponding to the email does not have a password set.</dd>
          * </dl>
          *
          * @param {string} email The users email address.
          * @param {string} password The users password.
          * @return {!firebase.Promise<!firebase.User>}
          */
        signInWithEmailAndPassword(email: string, password: string): firebase.Promise<firebase.User>;

        /**
          * Asynchronously signs in as an anonymous user.
          *
          * If there is already an anonymous user signed in, that user will be returned;
          * otherwise, a new anonymous user identity will be created and returned.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if anonymous accounts are not enabled. Enable anonymous accounts
          *     in the Firebase Console, under the Auth tab.</dd>
          * </dl>
          *
          * @return {!firebase.Promise<!firebase.User>}
          */
        signInAnonymously(): firebase.Promise<firebase.User>;

        /**
          * Authenticates a Firebase client using a popup-based OAuth authentication
          * flow.
          *
          * If succeeds, returns the signed in user along with the provider's credential.
          * If sign in was unsuccessful, returns an error object containing additional
          * information about the error.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/account-exists-with-different-credential</dt>
          * <dd>Thrown if there already exists an account with the email address
          *     asserted by the credential. Resolve this by calling
          *     {@link firebase.auth.Auth#fetchProvidersForEmail} with the error.email
          *     and then asking the user to sign in using one of the returned providers.
          *     Once the user is signed in, the original credential retrieved from the
          *     error.credential can be linked to the user with
          *     {@link firebase.User#link} to prevent the user from signing in again
          *     to the original provider via popup or redirect. If you are using
          *     redirects for sign in, save the credential in session storage and then
          *     retrieve on redirect and repopulate the credential using for example
          *     {@link firebase.auth.GoogleAuthProvider#credential} depending on the
          *     credential provider id and complete the link.</dd>
          * <dt>auth/auth-domain-config-required</dt>
          * <dd>Thrown if authDomain configuration is not provided when calling
          *     firebase.initializeApp(). Check Firebase Console for instructions on
          *     determining and passing that field.</dd>
          * <dt>auth/cancelled-popup-request</dt>
          * <dd>Thrown if successive popup operations are triggered. Only one popup
          *     request is allowed at one time. All the popups would fail with this error
          *     except for the last one.</dd>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if the type of account corresponding to the credential
          *     is not enabled. Enable the account type in the Firebase Console, under
          *     the Auth tab.</dd>
          * <dt>auth/popup-blocked</dt>
          * <dd>Thrown if the popup was blocked by the browser, typically when this
          *     operation is triggered outside of a click handler.</dd>
          * <dt>auth/popup-closed-by-user</dt>
          * <dd>Thrown if the popup window is closed by the user without completing the
          *     sign in to the provider.</dd>
          * <dt>auth/unauthorized-domain</dt>
          * <dd>Thrown if the app domain is not authorized for OAuth operations for your
          *     Firebase project. Edit the list of authorized domains from the Firebase
          *     console.</dd>
          * </dl>
          *
          * @example
          * // Creates the provider object.
          * var provider = new firebase.auth.FacebookAuthProvider();
          * // You can add additional scopes to the provider:
          * provider.addScope('email');
          * provider.addScope('user_friends');
          * // Sign in with popup:
          * auth.signInWithPopup(provider).then(function(result) {
          *   // The firebase.User instance:
          *   var user = result.user;
          *   // The Facebook firebase.auth.AuthCredential containing the Facebook
          *   // access token:
          *   var credential = result.credential;
          * }, function(error) {
          *   // The provider's account email, can be used in case of
          *   // auth/account-exists-with-different-credential to fetch the providers
          *   // linked to the email:
          *   var email = error.email;
          *   // The provider's credential:
          *   var credential = error.credential;
          *   // In case of auth/account-exists-with-different-credential error,
          *   // you can fetch the providers using this:
          *   if (error.code === 'auth/account-exists-with-different-credential') {
          *     auth.fetchProvidersForEmail(email).then(function(providers) {
          *       // The returned 'providers' is a list of the available providers
          *       // linked to the email address. Please refer to the guide for a more
          *       // complete explanation on how to recover from this error.
          *     });
          *   }
          * });
          *
          * @param {!firebase.auth.AuthProvider} provider The provider to authenticate.
          *     The provider has to be an OAuth provider. Non-OAuth providers like {@link
          *     firebase.auth.EmailAuthProvider} will throw an error.
          * @return {!firebase.Promise<!firebase.auth.UserCredential>}
          */
        signInWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<firebase.auth.UserCredential>;

        /**
          * Authenticates a Firebase client using a full-page redirect flow. To handle
          * the results and errors for this operation, refer to {@link
          * firebase.auth.Auth#getRedirectResult}.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/auth-domain-config-required</dt>
          * <dd>Thrown if authDomain configuration is not provided when calling
          *     firebase.initializeApp(). Check Firebase Console for instructions on
          *     determining and passing that field.</dd>
          * <dt>auth/unauthorized-domain</dt>
          * <dd>Thrown if the app domain is not authorized for OAuth operations for your
          *     Firebase project. Edit the list of authorized domains from the Firebase
          *     console.</dd>
          * </dl>
          *
          * @param {!firebase.auth.AuthProvider} provider The provider to authenticate.
          *     The provider has to be an OAuth provider. Non-OAuth providers like {@link
          *     firebase.auth.EmailAuthProvider} will throw an error.
          * @return {!firebase.Promise<void>}
          */
        signInWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<void>;

        /**
          * Returns a UserCredential from the redirect-based sign-in flow.
          *
          * If sign-in succeeded, returns the signed in user. If sign-in was
          * unsuccessful, fails with an error. If no redirect operation was called,
          * returns a UserCredential with a null User.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/account-exists-with-different-credential</dt>
          * <dd>Thrown if there already exists an account with the email address
          *     asserted by the credential. Resolve this by calling
          *     {@link firebase.auth.Auth#fetchProvidersForEmail} with the error.email
          *     and then asking the user to sign in using one of the returned providers.
          *     Once the user is signed in, the original credential retrieved from the
          *     error.credential can be linked to the user with
          *     {@link firebase.User#link} to prevent the user from signing in again
          *     to the original provider via popup or redirect. If you are using
          *     redirects for sign in, save the credential in session storage and then
          *     retrieve on redirect and repopulate the credential using for example
          *     {@link firebase.auth.GoogleAuthProvider#credential} depending on the
          *     credential provider id and complete the link.</dd>
          * <dt>auth/auth-domain-config-required</dt>
          * <dd>Thrown if authDomain configuration is not provided when calling
          *     firebase.initializeApp(). Check Firebase Console for instructions on
          *     determining and passing that field.</dd>
          * <dt>auth/credential-already-in-use</dt>
          * <dd>Thrown if the account corresponding to the credential given already
          *     exists among your users, or is already linked to a Firebase User.</dd>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if the type of account corresponding to the credential
          *     is not enabled. Enable the account type in the Firebase Console, under
          *     the Auth tab.</dd>
          * <dt>auth/timeout</dt>
          * <dd>Thrown typically if the app domain is not authorized for OAuth operations
          *     for your Firebase project. Edit the list of authorized domains from the
          *     Firebase console.</dd>
          * </dl>
          *
          * @example
          * // First, we perform the signInWithRedirect.
          * // Creates the provider object.
          * var provider = new firebase.auth.FacebookAuthProvider();
          * // You can add additional scopes to the provider:
          * provider.addScope('email');
          * provider.addScope('user_friends');
          * // Sign in with redirect:
          * auth.signInWithRedirect(provider)
          * ////////////////////////////////////////////////////////////
          * // The user is redirected to the provider's sign in flow...
          * ////////////////////////////////////////////////////////////
          * // Then redirected back to the app, where we check the redirect result:
          * auth.getRedirectResult().then(function(result) {
          *   // The firebase.User instance:
          *   var user = result.user;
          *   // The Facebook firebase.auth.AuthCredential containing the Facebook
          *   // access token:
          *   var credential = result.credential;
          * }, function(error) {
          *   // The provider's account email, can be used in case of
          *   // auth/account-exists-with-different-credential to fetch the providers
          *   // linked to the email:
          *   var email = error.email;
          *   // The provider's credential:
          *   var credential = error.credential;
          *   // In case of auth/account-exists-with-different-credential error,
          *   // you can fetch the providers using this:
          *   if (error.code === 'auth/account-exists-with-different-credential') {
          *     auth.fetchProvidersForEmail(email).then(function(providers) {
          *       // The returned 'providers' is a list of the available providers
          *       // linked to the email address. Please refer to the guide for a more
          *       // complete explanation on how to recover from this error.
          *     });
          *   }
          * });
          *
          * @return {!firebase.Promise<!firebase.auth.UserCredential>}
          */
        getRedirectResult(): firebase.Promise<firebase.auth.UserCredential>;

        /**
          * Signs out the current user.
          *
          * @return {!firebase.Promise<void>}
          */
        signOut(): firebase.Promise<void>;
    }

    interface Error {

        /**
          * Unique error code.
          *
          * @type {string}
          */
        code: string;

        /**
          * Complete error message.
          *
          * @type {string}
          */
        message: string;
    }

    interface AuthProvider {

        /** @type {string} */
        providerId: string;
    }

    class FacebookAuthProvider extends FacebookAuthProvider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FacebookAuthProvider__Class implements firebase.auth.AuthProvider  {

            /**
             * Facebook auth provider.
             * @constructor
             * @implements {firebase.auth.AuthProvider}
             */
            constructor();

            /** @type {string} */
            providerId: string;

            /**
             * @param {string} token Facebook access token.
             * @return {!firebase.auth.AuthCredential} The auth provider credential.
             */
            credential(token: string): firebase.auth.AuthCredential;

            /**
             * @param {string} scope Facebook OAuth scope.
             */
            addScope(scope: string): void;
    }


    class GithubAuthProvider extends GithubAuthProvider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class GithubAuthProvider__Class implements firebase.auth.AuthProvider  {

            /**
             * Github auth provider.
             * @constructor
             * @implements {firebase.auth.AuthProvider}
             */
            constructor();

            /** @type {string} */
            providerId: string;

            /**
             * @param {string} token Github access token.
             * @return {!firebase.auth.AuthCredential} The auth provider credential.
             */
            credential(token: string): firebase.auth.AuthCredential;

            /**
             * @param {string} scope Github OAuth scope.
             */
            addScope(scope: string): void;
    }


    class GoogleAuthProvider extends GoogleAuthProvider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class GoogleAuthProvider__Class implements firebase.auth.AuthProvider  {

            /**
             * Google auth provider.
             * @constructor
             * @implements {firebase.auth.AuthProvider}
             */
            constructor();

            /** @type {string} */
            providerId: string;

            /**
             * Creates a credential for Google. At least one of ID token and access token
             * is required.
             * @param {?string=} idToken Google ID token.
             * @param {?string=} accessToken Google access token.
             * @return {!firebase.auth.AuthCredential} The auth provider credential.
             */
            credential(idToken?: string, accessToken?: string): firebase.auth.AuthCredential;

            /**
             * @param {string} scope Google OAuth scope.
             */
            addScope(scope: string): void;
    }


    class TwitterAuthProvider extends TwitterAuthProvider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TwitterAuthProvider__Class implements firebase.auth.AuthProvider  {

            /**
             * Twitter auth provider.
             * @constructor
             * @implements {firebase.auth.AuthProvider}
             */
            constructor();

            /** @type {string} */
            providerId: string;

            /**
             * @param {string} token Twitter access token.
             * @param {string} secret Twitter secret.
             * @return {!firebase.auth.AuthCredential} The auth provider credential.
             */
            credential(token: string, secret: string): firebase.auth.AuthCredential;
    }


    class EmailAuthProvider extends EmailAuthProvider__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EmailAuthProvider__Class implements firebase.auth.AuthProvider  {

            /**
             * Email and password auth provider implementation.
             * @constructor
             * @implements {firebase.auth.AuthProvider}
             */
            constructor();

            /** @type {string} */
            providerId: string;

            /**
             * @param {string} email Email address.
             * @param {string} password User account password.
             * @return {!firebase.auth.AuthCredential} The auth provider credential.
             */
            credential(email: string, password: string): firebase.auth.AuthCredential;
    }


    /**
     * A structure containing a User and an AuthCredential.
     *
     * @typedef {{
     *   user: ?firebase.User,
     *   credential: ?firebase.auth.AuthCredential
     * }}
     */
    interface UserCredential {
        user: firebase.User;
        credential: firebase.auth.AuthCredential
    }
}

declare namespace firebase {

    interface UserInfo {

        /**
          * The user's unique ID.
          *
          * @type {string}
          */
        uid: string;

        /**
          * The authentication provider ID for the current user.
          * For example, 'facebook.com', or 'google.com'.
          *
          * @type {string}
          */
        providerId: string;

        /**
          * The user's email address (if available).
          * @type {?string}
          */
        email: string;

        /**
          * The user's display name (if available).
          *
          * @type {?string}
          */
        displayName: string;

        /**
          * The URL of the user's profile picture (if available).
          *
          * @type {?string}
          */
        photoURL: string;
    }

    interface User extends firebase.UserInfo {

        /** @type {boolean} */
        isAnonymous: boolean;

        /**
          * True if the user's email address has been verified.
          * @type {boolean}
          */
        emailVerified: boolean;

        /**
          * Additional provider-specific information about the user.
          * @type {!Array<firebase.UserInfo>}
          */
        providerData: firebase.UserInfo[];

        /**
          * A refresh token for the user account. Use only for advanced scenarios that
          * require explicitly refreshing tokens.
          * @type {string}
          */
        refreshToken: string;

        /**
          * Returns a JWT token used to identify the user to a Firebase service.
          *
          * Returns the current token if it has not expired, otherwise this will
          * refresh the token and return a new one.
          *
          * @param {boolean=} opt_forceRefresh Force refresh regardless of token
          *     expiration.
          * @return {!firebase.Promise<string>}
          */
        getToken(opt_forceRefresh?: boolean): firebase.Promise<string>;

        /**
          * Refreshes the current user, if signed in.
          *
          * @return {!firebase.Promise<void>}
          */
        reload(): firebase.Promise<void>;

        /**
          * Sends a verification email to a user.
          *
          * The verification process is completed by calling
          * {@link firebase.auth.Auth#applyActionCode}
          *
          * @return {!firebase.Promise<void>}
          */
        sendEmailVerification(): firebase.Promise<void>;

        /**
          * Links the user account with the given credentials.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/provider-already-linked</dt>
          * <dd>Thrown if the provider has already been linked to the user. This error is
          *     thrown even if this is not the same provider's account that is currently
          *     linked to the user.</dd>
          * <dt>auth/invalid-credential</dt>
          * <dd>Thrown if the provider's credential is not valid. This can happen if it
          *     has already expired when calling link, or if it used invalid token(s).
          *     Please refer to the Guide, under the provider's section you tried to
          *     link, and make sure you pass in the correct parameter to the credential
          *     method.</dd>
          * <dt>auth/credential-already-in-use</dt>
          * <dd>Thrown if the account corresponding to the credential given already
          *     exists among your users, or is already linked to a Firebase User.</dd>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if you have not enabled the provider in the Firebase Console. Go
          *     to the Firebase Console for your project, in the Auth section and the
          *     <strong>Sign in Method</strong> tab and configure the provider.</dd>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email used in a
          *     {@link firebase.auth.EmailAuthProvider#credential} is invalid.</dd>
          * <dt>auth/wrong-password</dt>
          * <dd>Thrown if the password used in a
          *     {@link firebase.auth.EmailAuthProvider#credential} is not correct or when
          *     the user associated with the email does not have a password.</dd>
          * </dl>
          *
          * @param {!firebase.auth.AuthCredential} credential The auth credential.
          * @return {!firebase.Promise<!firebase.User>}
          */
        link(credential: firebase.auth.AuthCredential): firebase.Promise<firebase.User>;

        /**
          * Unlinks a provider from a user account.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/no-such-provider</dt>
          * <dd>Thrown if the user does not have this provider linked or when the
          *     provider ID given does not exist.</dd>
          * </dt>
          *
          * @param {string} providerId
          * @return {!firebase.Promise<!firebase.User>}
          */
        unlink(providerId: string): firebase.Promise<firebase.User>;

        /**
          * Re-authenticates a user using a fresh credential. Use before operations
          * such as {@link firebase.User#updatePassword} that require tokens from recent
          * sign-in attempts.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/user-mismatch</dt>
          * <dd>Thrown if the credential given does not correspond to the user.</dd>
          * <dt>auth/user-not-found</dt>
          * <dd>Thrown if the credential given does not correspond to any existing user.
          *     </dd>
          * <dt>auth/invalid-credential</dt>
          * <dd>Thrown if the provider's credential is not valid. This can happen if it
          *     has already expired when calling link, or if it used invalid token(s).
          *     Please refer to the Guide, under the provider's section you tried to
          *     link, and make sure you pass in the correct parameter to the credential
          *     method.</dd>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email used in a
          *     {@link firebase.auth.EmailAuthProvider#credential} is invalid.</dd>
          * <dt>auth/wrong-password</dt>
          * <dd>Thrown if the password used in a
          *     {@link firebase.auth.EmailAuthProvider#credential} is not correct or when
          *     the user associated with the email does not have a password.</dd>
          * </dl>
          *
          * @param {!firebase.auth.AuthCredential} credential
          * @return {!firebase.Promise<void>}
          */
        reauthenticate(credential: firebase.auth.AuthCredential): firebase.Promise<void>;

        /**
          * Updates the user's email address.
          *
          * An email will be sent to the original email address (if it was set) that
          * allows to revoke the email address change, in order to protect them from
          * account hijacking.
          *
          * <b>Important:</b> this is a security sensitive operation that requires the
          * user to have recently signed in. If this requirement isn't met, ask the user
          * to authenticate again and then call {@link firebase.User#reauthenticate}.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/invalid-email</dt>
          * <dd>Thrown if the email used is invalid.</dd>
          * <dt>auth/email-already-in-use</dt>
          * <dd>Thrown if the email is already used by another user.</dd>
          * <dt>auth/requires-recent-login</dt>
          * <dd>Thrown if the user's last sign-in time does not meet the security
          *     threshold. Use {@link firebase.User#reauthenticate} to resolve. This does
          *     not apply if the user is anonymous.</dd>
          * </dl>
          *
          * @param {string} newEmail The new email address.
          * @return {!firebase.Promise<void>}
          */
        updateEmail(newEmail: string): firebase.Promise<void>;

        /**
          * Updates the user's password.
          *
          * <b>Important:</b> this is a security sensitive operation that requires the
          * user to have recently signed in. If this requirement isn't met, ask the user
          * to authenticate again and then call {@link firebase.User#reauthenticate}.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/weak-password</dt>
          * <dd>Thrown if the password is not strong enough.</dd>
          * <dt>auth/requires-recent-login</dt>
          * <dd>Thrown if the user's last sign-in time does not meet the security
          *     threshold. Use {@link firebase.User#reauthenticate} to resolve. This does
          *     not apply if the user is anonymous.</dd>
          * </dl>
          *
          * @param {string} newPassword
          * @return {!firebase.Promise<void>}
          */
        updatePassword(newPassword: string): firebase.Promise<void>;

        /**
          * Updates a user's profile data.
          *
          * @example
          * // Updates the user attributes:
          * user.updateProfile({
          *   displayName: "Jane Q. User",
          *   photoURL: "https://example.com/jane-q-user/profile.jpg"
          * }).then(function() {
          *   // Profile updated successfully!
          *   // "Jane Q. User"
          *   var displayName = user.displayName;
          *   // "https://example.com/jane-q-user/profile.jpg"
          *   var photoURL = user.photoURL;
          * }, function(error) {
          *   // An error happened.
          * });
          *
          * // Passing a null value will delete the current attribute's value, but not
          * // passing a property won't change the current attribute's value:
          * // Let's say we're using the same user than before, after the update.
          * user.updateProfile({photoURL: null}).then(function() {
          *   // Profile updated successfully!
          *   // "Jane Q. User", hasn't changed.
          *   var displayName = user.displayName;
          *   // Now, this is null.
          *   var photoURL = user.photoURL;
          * }, function(error) {
          *   // An error happened.
          * });
          *
          * @param {!{displayName: ?string, photoURL: ?string}} profile The profile's
          *     displayName and photoURL to update.
          * @return {!firebase.Promise<void>}
          */
        updateProfile(profile: { displayName: string; photoURL: string }): firebase.Promise<void>;

        /**
          * Links the authenticated provider to the user account using a pop-up based
          * OAuth flow.
          *
          * If the linking is successful, the returned result will contain the user
          * and the provider's credential.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/auth-domain-config-required</dt>
          * <dd>Thrown if authDomain configuration is not provided when calling
          *     firebase.initializeApp(). Check Firebase Console for instructions on
          *     determining and passing that field.</dd>
          * <dt>auth/cancelled-popup-request</dt>
          * <dd>Thrown if successive popup operations are triggered. Only one popup
          *     request is allowed at one time on a user or an auth instance. All the
          *     popups would fail with this error except for the last one.</dd>
          * <dt>auth/credential-already-in-use</dt>
          * <dd>Thrown if the account corresponding to the credential given already
          *     exists among your users, or is already linked to a Firebase User.</dd>
          * <dt>auth/operation-not-allowed</dt>
          * <dd>Thrown if you have not enabled the provider in the Firebase Console. Go
          *     to the Firebase Console for your project, in the Auth section and the
          *     <strong>Sign in Method</strong> tab and configure the provider.</dd>
          * <dt>auth/popup-blocked</dt>
          * <dd>Thrown if the popup was blocked by the browser, typically when this
          *     operation is triggered outside of a click handler.</dd>
          * <dt>auth/popup-closed-by-user</dt>
          * <dd>Thrown if the popup window is closed by the user without completing the
          *     sign in to the provider.</dd>
          * <dt>auth/provider-already-linked</dt>
          * <dd>Thrown if the provider has already been linked to the user. This error is
          *     thrown even if this is not the same provider's account that is currently
          *     linked to the user.</dd>
          * <dt>auth/unauthorized-domain</dt>
          * <dd>Thrown if the app domain is not authorized for OAuth operations for your
          *     Firebase project. Edit the list of authorized domains from the Firebase
          *     console.</dd>
          * </dl>
          *
          * @example
          * // Creates the provider object.
          * var provider = new firebase.auth.FacebookAuthProvider();
          * // You can add additional scopes to the provider:
          * provider.addScope('email');
          * provider.addScope('user_friends');
          * // Link with popup:
          * user.linkWithPopup(provider).then(function(result) {
          *   // The firebase.User instance:
          *   var user = result.user;
          *   // The Facebook firebase.auth.AuthCredential containing the Facebook
          *   // access token:
          *   var credential = result.credential;
          * }, function(error) {
          *   // An error happened.
          * });
          *
          * @param {!firebase.auth.AuthProvider} provider The provider to authenticate.
          *     The provider has to be an OAuth provider. Non-OAuth providers like {@link
          *     firebase.auth.EmailAuthProvider} will throw an error.
          * @return {!firebase.Promise<!firebase.auth.UserCredential>}
          */
        linkWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<firebase.auth.UserCredential>;

        /**
          * Deletes and signs out the user.
          *
          * <b>Important:</b> this is a security sensitive operation that requires the
          * user to have recently signed in. If this requirement isn't met, ask the user
          * to authenticate again and then call {@link firebase.User#reauthenticate}.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/requires-recent-login</dt>
          * <dd>Thrown if the user's last sign-in time does not meet the security
          *     threshold. Use {@link firebase.User#reauthenticate} to resolve. This does
          *     not apply if the user is anonymous.</dd>
          * </dl>
          *
          * @return {!firebase.Promise<void>}
          */
        delete(): firebase.Promise<void>;

        /**
          * Links the authenticated provider to the user account using a full-page
          * redirect flow.
          *
          * <h4>Error Codes</h4>
          * <dl>
          * <dt>auth/auth-domain-config-required</dt>
          * <dd>Thrown if authDomain configuration is not provided when calling
          *     firebase.initializeApp(). Check Firebase Console for instructions on
          *     determining and passing that field.</dd>
          * <dt>auth/provider-already-linked</dt>
          * <dd>Thrown if the provider has already been linked to the user. This error is
          *     thrown even if this is not the same provider's account that is currently
          *     linked to the user.</dd>
          * <dt>auth/unauthorized-domain</dt>
          * <dd>Thrown if the app domain is not authorized for OAuth operations for your
          *     Firebase project. Edit the list of authorized domains from the Firebase
          *     console.</dd>
          * </dl>
          *
          * @param {!firebase.auth.AuthProvider} provider The provider to authenticate.
          *     The provider has to be an OAuth provider. Non-OAuth providers like {@link
          *     firebase.auth.EmailAuthProvider} will throw an error.
          * @return {!firebase.Promise<void>}
          */
        linkWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<void>;
    }

    /**
     * Gets the Auth object for the default App or a given App.
     *
     * Usage:
     *
     *   firebase.auth()
     *   firebase.auth(app)
     *
     * @namespace
     * @param {!firebase.app.App=} app
     * @return {!firebase.auth.Auth}
     */
    function auth(app?: firebase.app.App): firebase.auth.Auth;
}

declare namespace firebase.auth.FacebookAuthProvider {

    /** @type {string} */
    var PROVIDER_ID: string;
}

declare namespace firebase.auth.GithubAuthProvider {

    /** @type {string} */
    var PROVIDER_ID: string;
}

declare namespace firebase.auth.GoogleAuthProvider {

    /** @type {string} */
    var PROVIDER_ID: string;
}

declare namespace firebase.auth.TwitterAuthProvider {

    /** @type {string} */
    var PROVIDER_ID: string;
}

declare namespace firebase.auth.EmailAuthProvider {

    /** @type {string} */
    var PROVIDER_ID: string;
}

/***FOOO**/

declare namespace firebase.database {

    interface Database {

        /**
          * The App associated with the Database service instance.
          *
          * @type {!firebase.app.App}
          */
        app: firebase.app.App;

        /**
          * Returns a reference to the root or the specified path.
          *
          * @param {string=} path
          * @return {!firebase.database.Reference} Firebase reference.
          */
        ref(path?: string): firebase.database.Reference;

        /**
          * Returns a reference to the root or the path specified in url. An exception is
          * thrown if the url is not in the same domain as the current database.
          *
          * @param {string} url
          * @return {!firebase.database.Reference} Firebase reference.
          */
        refFromURL(url: string): firebase.database.Reference;

        /**
          * Disconnect from the server (all database operations will be completed
          * offline).
          *
          * The client automatically maintains a persistent connection to the database
          * server, which will remain active indefinitely and reconnect when
          * disconnected. However, the `goOffline()` and `goOnline()` methods may be used
          * to control the client connection in cases where a persistent connection is
          * undesirable.
          *
          * While offline, the client will no longer receive data updates from the
          * database. However, all database operations performed locally will continue to
          * immediately fire events, allowing your application to continue behaving
          * normally. Additionally, each operation performed locally will automatically
          * be queued and retried upon reconnection to the database server.
          *
          * To reconnect to the database and begin receiving remote events, see
          * `goOnline()`.
          *
          * @example
          * firebase.database().goOffline();
          */
        goOffline(): void;

        /**
          * (Re)connect to the server and synchronize the offline database state
          * with the server state.
          *
          * This method should be used after disabling the active connection with
          * `goOffline()`. Once reconnected, the client will transmit the proper data and
          * fire the appropriate events so that your client "catches up" automatically.
          *
          * @example
          * firebase.database().goOnline();
          */
        goOnline(): void;
    }

    interface Reference extends firebase.database.Query {

        /**
          * The last part of the current path.
          *
          * For example, "fred" is the key for
          * https://sample-app.firebaseio.com/users/fred.
          *
          * The key of the root Reference is `null`.
          *
          * @example
          * var fredRef = firebase.database().ref("users/fred");
          * var key = fredRef.key;                 // key === "fred"
          * key = fredRef.child("name/last").key;  // key === "last"
          *
          * @type {string|null}
          */
        key: string|any /*null*/;

        /**
          * Gets a Reference for the location at the specified relative path.
          *
          * The relative path can either be a simple child name (for example, "fred") or
          * a deeper slash-separated path (for example, "fred/name/first").
          *
          * @example
          * var usersRef = firebase.database().ref('users');
          * var fredRef = usersRef.child('fred');
          * var fredFirstNameRef = fredRef.child('name/first');
          * var path = fredFirstNameRef.toString();
          * // path is now 'https://sample-app.firebaseio.com/users/fred/name/first'
          *
          * @param {string} path A relative path from this location to the desired child
          *   location.
          * @return {!firebase.database.Reference} The specified child location.
          */
        child(path: string): firebase.database.Reference;

        /**
          * @example
          * var usersRef = firebase.database().ref('users');
          * var path = usersRef.parent.toString();
          * // path is now 'https://sample-app.firebaseio.com'
          *
          * @type {?firebase.database.Reference} The parent location of a Reference.
          */
        parent: firebase.database.Reference;

        /**
          * @example
          * var fredRef = firebase.database().ref('samplechat/users/fred');
          * var path = fredRef.root.toString();
          * // path is now 'https://sample-app.firebaseio.com'
          *
          * @type {!firebase.database.Reference} The root location of a Reference.
          */
        root: firebase.database.Reference;

        /**
          * Write data to this database location.
          *
          * This will overwrite any data at this location and all child locations.
          *
          * The effect of the write will be visible immediately and the corresponding
          * events ('value', 'child_added', etc.) will be triggered. Synchronization of
          * the data to the Firebase servers will also be started, and the returned
          * Promise will resolve when complete. If provided, the onComplete callback will
          * be called asynchronously after synchronization has finished.
          *
          * Passing null for the new value is equivalent to calling remove(); all data at
          * this location or any child location will be deleted.
          *
          * set() will remove any priority stored at this location, so if priority is
          * meant to be preserved, you should use setWithPriority() instead.
          *
          * Note that modifying data with set() will cancel any pending transactions at
          * that location, so extreme care should be taken if mixing set() and
          * transaction() to modify the same data.
          *
          * A single set() will generate a single "value" event at the location where the
          * set() was performed.
          *
          * @example
          * var fredNameRef = firebase.database().ref('users/fred/name');
          * fredNameRef.child('first').set('Fred');
          * fredNameRef.child('last').set('Flintstone');
          * // We've written 'Fred' to the database location storing fred's first name,
          * // and 'Flintstone' to the location storing his last name
          *
          * @example
          * fredNameRef.set({ first: 'Fred', last: 'Flintstone' });
          * // Exact same effect as the previous example, except we've written
          * // fred's first and last name simultaneously.
          *
          * @example
          * fredNameRef.set({ first: 'Fred', last: 'Flintstone' })
          *   .then(function() {
          *     console.log('Synchronization succeeded');
          *   })
          *   .catch(function(error) {
          *     console.log('Synchronization failed');
          *   });
          * // Same as the previous example, except we will also log a message
          * // when the data has finished synchronizing.
          *
          * @param {*} value The value to be written (string, number, boolean, object,
          *   array, or null).
          * @param {function(?Error)=} onComplete Callback called when write to server is
          *   complete.
          * @return {!firebase.Promise<void>} Resolves when write to server is complete.
          */
        set(value: any, onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * Writes multiple values to the database at once.
          *
          * The `values` argument contains multiple property/value pairs that will be
          * written to the database together. Each child property can either be a simple
          * property (for example, "name"), or a relative path (for example,
          * "name/first") from the current location to the data to update.
          *
          * As opposed to the `set()` method, `update()` can be use to selectively update
          * only the referenced properties at the current location (instead of replacing
          * all the child properties at the current location).
          *
          * The effect of the write will be visible immediately and the corresponding
          * events ('value', 'child_added', etc.) will be triggered. Synchronization of
          * the data to the Firebase servers will also be started, and the returned
          * Promise will resolve when complete. If provided, the onComplete callback will
          * be called asynchronously after synchronization has finished.
          *
          * A single update() will generate a single "value" event at the location where
          * the update() was performed, regardless of how many children were modified.
          *
          * Note that modifying data with update() will cancel any pending transactions
          * at that location, so extreme care should be taken if mixing update() and
          * transaction() to modify the same data.
          *
          * Passing null to update() will remove the data at this location.
          *
          * See
          * {@link
          *  https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html
          *  Introducing multi-location updates and more}
          *
          * @example
          * var fredNameRef = firebase.database().ref('users/fred/name');
          * // Modify the 'first' and 'last' properties, but leave other data at
          * // fredNameRef unchanged.
          * fredNameRef.update({ first: 'Fred', last: 'Flintstone' });
          *
          * @param {!Object} values Object containing multiple values.
          * @param {function(?Error)=} onComplete Callback called when write to server is
          *   complete.
          * @return {!firebase.Promise<void>} Resolves when update on server is complete.
          */
        update(values: Object, onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * Writes data the database location. Like `set()` but also specifies the
          * priority for that data.
          *
          * @deprecated Applications need not use priority, but can order collections by
          *   ordinary properties (see {@link firebase.database.Query#orderByChild}).
          *
          * @param {*} newVal
          * @param {string|number|null} newPriority
          * @param {function(?Error)=} onComplete
          * @return {!firebase.Promise<void>}
          */
        setWithPriority(newVal: any, newPriority: string|number|any /*null*/, onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * Remove the data at this database location.
          *
          * Any data at chiuld locations will also be deleted.
          *
          * The effect of the remove will be visible immediately and the corresponding
          * event 'value' will be triggered. Synchronization of the remove to the
          * Firebase servers will also be started, and the returned Promise will resolve
          * when complete. If provided, the onComplete callback will be called
          * asynchronously after synchronization has finished.
          *
          * @example
          * var fredRef = firebase.database().ref('users/fred');
          * fredRef.remove()
          *   .then(function() {
          *     console.log("Remove succeeded.")
          *   })
          *   .catch(function(error) {
          *     console.log("Remove failed: " + error.message)
          *   });
          *
          * @param {function(?Error)=} onComplete Callback called when write to server is
          *   complete.
          * @return {!firebase.Promise<void>} Resolves when remove on server is complete.
          */
        remove(onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * Atomically modifies the data at this location.
          *
          * Atomically modify the data at this location. Unlike a normal `set()`, which
          * just overwrites the data regardless of its previous value, `transaction()` is
          * used to modify the existing value to a new value, ensuring there are no
          * conflicts with other clients writing to the same location at the same time.
          *
          * To accomplish this, you pass `transaction()` an update function which is used
          * to transform the current value into a new value. If another client writes to
          * the location before your new value is successfully written, your update
          * function will be called again with the new current value, and the write will
          * be retried. This will happen repeatedly until your write succeeds without
          * conflict or you abort the transaction by not returning a value from your
          * update function.
          *
          * Note: Modifying data with set() will cancel any pending transactions at
          * that location, so extreme care should be taken if mixing set() and
          * transaction() to update the same data.
          *
          * Note: When using transactions with Security and Firebase Rules in place, be
          * aware that a client needs `.read` access in addition to `.write` access in
          * order to perform a transaction. This is because the client-side nature of
          * transactions requires the client to read the data in order to transactionally
          * update it.
          *
          * @example
          * // Increment Fred's rank by 1.
          * var fredRankRef = firebase.database().ref('users/fred/rank');
          * fredRankRef.transaction(function(currentRank) {
          *   // If users/fred/rank has never been set, currentRank will be null.
          *   return currentRank + 1;
          * });
          *
          * @example
          * // Try to create a user for wilma, but only if the user id 'wilma' isn't
          * // already taken
          * var wilmaRef = firebase.database().ref('users/wilma');
          * wilmaRef.transaction(function(currentData) {
          *   if (currentData === null) {
          *     return { name: { first: 'Wilma', last: 'Flintstone' } };
          *   } else {
          *     console.log('User wilma already exists.');
          *     return; // Abort the transaction.
          *   }
          * }, function(error, committed, snapshot) {
          *   if (error) {
          *     console.log('Transaction failed abnormally!', error);
          *   } else if (!committed) {
          *     console.log('We aborted the transaction (because wilma already exists).');
          *   } else {
          *     console.log('User wilma added!');
          *   }
          *   console.log("Wilma's data: ", snapshot.val());
          * });
          *
          *
          * @param {function(*): *} transactionUpdate A developer-supplied function which
          *   will be passed the current data stored at this location (as a JavaScript
          *   object). The function should return the new value it would like written (as
          *   a JavaScript object). If `undefined` is returned (i.e. you return with no
          *   arguments) the transaction will be aborted and the data at this location
          *   will not be modified.
          * @param {(function(?Error, boolean,
          *                   ?firebase.database.DataSnapshot))=} onComplete A callback
          *   function that will be called when the transaction completes. The callback
          *   is passed three arguments: a possibly-null `Error`, a `boolean` indicating
          *   whether the transaction was committed, and a `DataSnapshot` indicating the
          *   final result. If the transaction failed abnormally, the first argument will
          *   be an `Error` object indicating the failure cause. If the transaction
          *   finished normally, but no data was committed because no data was returned
          *   from `transactionUpdate`, then second argument will be false. If the
          *   transaction completed and committed data to Firebase, the second argument
          *   will be true. Regardless, the third argument will be a `DataSnapshot`
          *   containing the resulting data in this location.
          * @param {boolean=} applyLocally By default, events are raised each time the
          *   transaction update function runs. So if it is run multiple times, you may
          *   see intermediate states. You can set this to false to suppress these
          *   intermediate states and instead wait until the transaction has completed
          *   before events are raised.
          * @return {!firebase.Promise<{
          *   committed: boolean,
          *   snapshot: ?firebase.database.DataSnapshot
          * }>} Returns a Promise that can optionally be used instead of the onComplete
          *   callback to handle success and failure.
          */
        transaction(transactionUpdate: { (_0: any): any }, onComplete?: { (_0: Error, _1: boolean, _2: firebase.database.DataSnapshot): any /*missing*/ }, applyLocally?: boolean): firebase.Promise<{ committed: boolean; snapshot: firebase.database.DataSnapshot }>;

        /**
          * Sets a priority for the data at this database location.
          *
          * @deprecated Applications need not use priority, but can order collections by
          *   ordinary properties (see {@link firebase.database.Query#orderByChild}).
          *
          * @param {string|number|null} priority
          * @param {function(?Error)} onComplete
          * @return {!firebase.Promise<void>}
          */
        setPriority(priority: string|number|any /*null*/, onComplete: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * Generates a new child location using a unique key and returns its reference.
          *
          * This is the most common pattern for adding data to a collection of items.
          *
          * If you provide a value to `push()`, the value will be written to the
          * generated location. If you don't pass a value, nothing will be written to the
          * database and the child will remain empty (but you can use the reference
          * elsewhere).
          *
          * The unique key generated by `push()` are ordered by the current time, so the
          * resulting list of items will be chronologically sorted. The keys are also
          * designed to be unguessable (they contain 72 random bits of entropy).
          *
          *
          * See
          * {@link
          *  https://firebase.google.com/docs/database/web/save-data#append_to_a_list_of_data
          *  Append to a list of data}
          * </br>See
          * {@link
          *  https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html
          *  The 2^120 Ways to Ensure Unique Identifiers}
          *
          * @example
          * var messageListRef = firebase.database().ref('message_list');
          * var newMessageRef = messageListRef.push();
          * newMessageRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
          * // We've appended a new message to the message_list location.
          * var path = newMessageRef.toString();
          * // path will be something like
          * // 'https://sample-app.firebaseio.com/message_list/-IKo28nwJLH0Nc5XeFmj'
          *
          * @param {*=} value Optional value to be written at the generated location.
          * @param {function(?Error)=} onComplete Callback called when write to server is
          *   complete.
          * @return {!firebase.database.ThenableReference} Combined Promise and
          *   reference; resolves when write is complete, but can be used immediately as
          *   the reference to the child location.
          */
        push(value?: any, onComplete?: { (_0: Error): any /*missing*/ }): firebase.database.ThenableReference;

        /**
          * @return {!firebase.database.OnDisconnect}
          */
        onDisconnect(): firebase.database.OnDisconnect;
    }

    interface ThenableReference extends firebase.database.Reference, firebase.Thenable<void> {
    }

    interface Query {

        /**
          * @type {!firebase.database.Reference}
          */
        ref: firebase.database.Reference;

        /**
          * @param {!string} eventType
          * @param {!function(firebase.database.DataSnapshot, string=)} callback
          * @param {(function(Error)|Object)=} cancelCallbackOrContext
          * @param {Object=} context
          * @return {!function(firebase.database.DataSnapshot, string=)}
          */
        on(eventType: string, callback: { (_0: firebase.database.DataSnapshot, _1: string): any /*missing*/ }, cancelCallbackOrContext?: { (_0: Error): any /*missing*/ }|Object, context?: Object): { (_0: firebase.database.DataSnapshot, _1: string): any /*missing*/ };

        /**
          * @param {string=} eventType
          * @param {function(!firebase.database.DataSnapshot, ?string=)=} callback
          * @param {Object=} context
          */
        off(eventType?: string, callback?: { (_0: firebase.database.DataSnapshot, _1: string): any /*missing*/ }, context?: Object): void;

        /**
          * @param {!string} eventType
          * @param {!function(!firebase.database.DataSnapshot, string=)} userCallback
          * @return {!firebase.Promise<*>}
          */
        once(eventType: string, userCallback: { (_0: firebase.database.DataSnapshot, _1: string): any /*missing*/ }): firebase.Promise<any>;

        /**
          * @param {!number} limit
          * @return {!firebase.database.Query}
          */
        limitToFirst(limit: number): firebase.database.Query;

        /**
          * @param {!number} limit
          * @return {!firebase.database.Query}
          */
        limitToLast(limit: number): firebase.database.Query;

        /**
          * @param {!string} path
          * @return {!firebase.database.Query}
          */
        orderByChild(path: string): firebase.database.Query;

        /**
          * @return {!firebase.database.Query}
          */
        orderByKey(): firebase.database.Query;

        /**
          * Generates a new `Query` object order by priority.
          *
          * @deprecated Applications need not use priority, but can order collections by
          *   ordinary properties (see {@link firebase.database.Query#orderByChild}).
          * @return {!firebase.database.Query}
          */
        orderByPriority(): firebase.database.Query;

        /**
          * @return {!firebase.database.Query}
          */
        orderByValue(): firebase.database.Query;

        /**
          * @param {number|string|boolean|null} value
          * @param {string=} key
          * @return {!firebase.database.Query}
          */
        startAt(value: number|string|boolean|any /*null*/, key?: string): firebase.database.Query;

        /**
          * @param {number|string|boolean|null} value
          * @param {string=} key
          * @return {!firebase.database.Query}
          */
        endAt(value: number|string|boolean|any /*null*/, key?: string): firebase.database.Query;

        /**
          * @param {number|string|boolean|null} value
          * @param {string=} key
          * @return {!firebase.database.Query}
          */
        equalTo(value: number|string|boolean|any /*null*/, key?: string): firebase.database.Query;

        /**
          * Get the absolute URL for this location.
          *
          * The toString() method returns a URL that is ready to be put into a browser,
          * curl command, or a firebase.database.refFromURL() call. Since all of those
          * expect the URL to be url-encoded, toString() returns an encoded URL.
          *
          * Append '.json' to the URL when typed into a browser to download JSON
          * formatted data. If the location is secured (not publicly readable) you will
          * get a permission-denied error.
          *
          * @example
          * // Calling toString() on a root Firebase reference returns the URL where its
          * // data is stored within the database:
          * var rootRef = firebase.database().ref();
          * var rootUrl = rootRef.toString();
          * // rootUrl === "https://sample-app.firebaseio.com/".
          *
          * // Calling toString() at a deeper Firebase reference returns the URL of that
          * // deep path within the database:
          * var fredRef = rootRef.child('users/fred');
          * var fredURL = fredRef.toString();
          * // fredURL === "https://sample-app.firebaseio.com/users/fred".
          *
          * @return {string} The absolute URL for this location.
          * @override
          */
        toString(): string;
    }

    interface DataSnapshot {

        /**
          * Convert the DataSnapshot to a Javascript value (number, boolean, string,
          * Object, Array or null).
          *
          * @return {*}
          */
        val(): any;

        /**
          * @return {*}
          */
        exportVal(): any;

        /**
          * @return {boolean}
          */
        exists(): boolean;

        /**
          * @param {string} path
          * @return {!firebase.database.DataSnapshot}
          */
        child(path: string): firebase.database.DataSnapshot;

        /**
          * @param {string} path
          * @return {boolean}
          */
        hasChild(path: string): boolean;

        /**
          * Gets the priority value of the data in this `DataSnapshot`.
          *
          * @deprecated Applications need not use priority, but can order collections by
          *   ordinary properties (see {@link firebase.database.Query#orderByChild}).
          * @return {string|number|null}
          */
        getPriority(): string|number|any /*null*/;

        /**
          * Enumerate the top-level children in the DataSnapshot.
          * @param {function(!firebase.database.DataSnapshot): boolean} action
          * @return {boolean}
          */
        forEach(action: { (_0: firebase.database.DataSnapshot): boolean }): boolean;

        /**
          * @return {boolean}
          */
        hasChildren(): boolean;

        /**
          * @type {string|null}
          */
        key: string|any /*null*/;

        /**
          * @return {number}
          */
        numChildren(): number;

        /**
          * @type {!firebase.database.Reference}
          */
        ref: firebase.database.Reference;
    }

    interface OnDisconnect {

        /**
          * @param {function(?Error)=} onComplete
          * @return {!firebase.Promise<void>}
          */
        cancel(onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * @param {function(?Error)=} onComplete
          * @return {!firebase.Promise<void>}
          */
        remove(onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * @param {*} value
          * @param {function(?Error)=} onComplete
          * @return {!firebase.Promise<void>}
          */
        set(value: any, onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * Ensures the data at this location is set to the specified value and priority
          * when the client is disconnected (due to closing the browser, navigating to a
          * new page, or network issues).
          *
          * @deprecated Applications need not use priority, but can order collections by
          *   ordinary properties (see {@link firebase.database.Query#orderByChild}).
          * @param {*} value
          * @param {number|string|null} priority
          * @param {function(?Error)=} onComplete
          * @return {!firebase.Promise<void>}
          */
        setWithPriority(value: any, priority: number|string|any /*null*/, onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;

        /**
          * @param {!Object} objectToMerge
          * @param {function(?Error)=} onComplete
          * @return {!firebase.Promise<void>}
          */
        update(objectToMerge: Object, onComplete?: { (_0: Error): any /*missing*/ }): firebase.Promise<void>;
    }

    /**
     * Log debugging information to the console.
     *
     * @param {(boolean|*)=} logger
     * @param {boolean=} persistent Remembers the logging state between page
     *     refreshes if true.
     */
    function enableLogging(logger?: boolean|any, persistent?: boolean): void;

    /**
     * A placeholder value for auto-populating the current timestamp (time
     * since the Unix epoch, in milliseconds) as determined by the Firebase
     * servers.
     *
     * @const {{
     *   TIMESTAMP: !Object
     * }}
     */
    var ServerValue: any /*missing*/;

    /**
     * @const {string}
     */
    var SDK_VERSION: any /*missing*/;
}

declare namespace firebase {
    /**
     * Access the Database service for the default App (or a given app).
     *
     * Usage (either):
     *
     *   firebase.database()
     *   firebase.database(app)
     *
     * @namespace
     * @param {!firebase.app.App=} app
     * @return {!firebase.database.Database}
     */
    function database(app?: firebase.app.App): firebase.database.Database;
}

/** FOOO***/


declare namespace firebase.storage {

    interface Storage {

        /**
          * The app associated with this service.
          * @type {!firebase.app.App}
          */
        app: firebase.app.App;

        /**
          * Returns a reference for the given path in the default bucket.
          * @param {string=} path A relative path to initialize the reference with,
          *     for example `path/to/image.jpg`. If not passed, the returned reference
          *     points to the bucket root.
          * @return {!firebase.storage.Reference} A reference for the given path.
          */
        ref(path?: string): firebase.storage.Reference;

        /**
          * Returns a reference for the given absolute URL.
          * @param {string} url A URL in the form: <br />
          *     1) a gs:// URL, for example `gs://bucket/files/image.png` <br />
          *     2) a download URL taken from object metadata. <br />
          *     @see {@link firebase.storage.FullMetadata.prototype.downloadURLs}
          * @return {!firebase.storage.Reference} A reference for the given URL.
          */
        refFromURL(url: string): firebase.storage.Reference;

        /**
          * The maximum time to retry operations other than uploads or downloads in
          * milliseconds.
          * @type {number}
          */
        maxOperationRetryTime: number;

        /**
          * @param {number} time The new maximum operation retry time in milliseconds.
          * @see {@link firebase.storage.Storage.prototype.maxOperationRetryTime}
          */
        setMaxOperationRetryTime(time: number): void;

        /**
          * The maximum time to retry uploads in milliseconds.
          * @type {number}
          */
        maxUploadRetryTime: number;

        /**
          * @param {number} time The new maximum upload retry time in milliseconds.
          * @see {@link firebase.storage.Storage.prototype.maxUploadRetryTime}
          */
        setMaxUploadRetryTime(time: number): void;
    }

    interface Reference {

        /**
          * Returns a gs:// URL for this object in the form
          *   `gs://<bucket>/<path>/<to>/<object>`
          * @return {string} The gs:// URL.
          */
        toString(): string;

        /**
          * Returns a reference to a relative path from this reference.
          * @param {string} path The relative path from this reference.
          *     Leading, trailing, and consecutive slashes are removed.
          * @return {!firebase.storage.Reference} The reference a the given path.
          */
        child(path: string): firebase.storage.Reference;

        /**
          * Uploads data to this reference's location.
          * @param {!Blob} blob The data to upload.
          * @param {!firebase.storage.UploadMetadata=} metadata Metadata for the newly
          *     uploaded object.
          * @return {!firebase.storage.UploadTask} An object that can be used to monitor
          *     and manage the upload.
          */
        put(blob: Blob, metadata?: firebase.storage.UploadMetadata): firebase.storage.UploadTask;

        /**
          * Deletes the object at this reference's location.
          * @return {!Promise<void>} A promise that resolves if the deletion succeeded
          *     and rejects if it failed, including if the object didn't exist.
          */
        delete(): Promise<void>;

        /**
          * Fetches metadata for the object at this location, if one exists.
          * @return {!Promise<firebase.storage.FullMetadata>} A promise that resolves
          *     with the metadata, or rejects if the fetch failed, including if the
          *     object did not exist.
          */
        getMetadata(): Promise<firebase.storage.FullMetadata>;

        /**
          * Updates the metadata for the object at this location, if one exists.
          * @param {!firebase.storage.SettableMetadata} metadata The new metadata.
          *     Setting a property to 'null' removes it on the server, while leaving
          *     a property as 'undefined' has no effect.
          * @return {!Promise<firebase.storage.FullMetadata>} A promise that resolves
          *     with the full updated metadata or rejects if the updated failed,
          *     including if the object did not exist.
          */
        updateMetadata(metadata: firebase.storage.SettableMetadata): Promise<firebase.storage.FullMetadata>;

        /**
          * Fetches a long lived download URL for this object.
          * @return {!Promise<string>} A promise that resolves with the download URL or
          *     rejects if the fetch failed, including if the object did not exist.
          */
        getDownloadURL(): Promise<string>;

        /**
          * A reference pointing to the parent location of this reference, or null if
          * this reference is the root.
          * @type {?firebase.storage.Reference}
          */
        parent: firebase.storage.Reference;

        /**
          * A reference to the root of this reference's bucket.
          * @type {!firebase.storage.Reference}
          */
        root: firebase.storage.Reference;

        /**
          * The name of the bucket containing this reference's object.
          * @type {string}
          */
        bucket: string;

        /**
          * The full path of this object.
          * @type {string}
          */
        fullPath: string;

        /**
          * The short name of this object, which is the last component of the full path.
          * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
          * @type {string}
          */
        name: string;

        /**
          * The storage service associated with this reference.
          * @type {!firebase.storage.Storage}
          */
        storage: firebase.storage.Storage;
    }

    interface SettableMetadata {

        /**
          * Served as the 'Cache-Control' header on object download.
          * @type {?string|undefined}
          */
        cacheControl: string|any /*undefined*/;

        /**
          * Served as the 'Content-Disposition' header on object download.
          * @type {?string|undefined}
          */
        contentDisposition: string|any /*undefined*/;

        /**
          * Served as the 'Content-Encoding' header on object download.
          * @type {?string|undefined}
          */
        contentEncoding: string|any /*undefined*/;

        /**
          * Served as the 'Content-Language' header on object download.
          * @type {?string|undefined}
          */
        contentLanguage: string|any /*undefined*/;

        /**
          * Served as the 'Content-Type' header on object download.
          * @type {?string|undefined}
          */
        contentType: string|any /*undefined*/;

        /**
          * Additional user-defined custom metadata.
          * @type {?Object<string>|undefined}
          */
        customMetadata: { [key: string]: any /*missing*/ }|any /*undefined*/;
    }

    interface UploadMetadata extends firebase.storage.SettableMetadata {

        /**
          * A Base64-encoded MD5 hash of the object being uploaded.
          * If set, the server will calculate the MD5 of the data it receives and reject
          * the upload if the hash differs.
          * @type {?string|undefined}
          */
        md5Hash: string|any /*undefined*/;
    }

    interface FullMetadata extends firebase.storage.UploadMetadata {

        /**
          * The bucket this object is contained in.
          * @type {string}
          */
        bucket: string;

        /**
          * The object's generation.
          * @type {string}
          * @see {@link https://cloud.google.com/storage/docs/generations-preconditions}
          */
        generation: string;

        /**
          * The object's metageneration.
          * @type {string}
          * @see {@link https://cloud.google.com/storage/docs/generations-preconditions}
          */
        metageneration: string;

        /**
          * The full path of this object.
          * @type {string}
          */
        fullPath: string;

        /**
          * The short name of this object, which is the last component of the full path.
          * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
          * @type {string}
          */
        name: string;

        /**
          * The size of this object, in bytes.
          * @type {number}
          */
        size: number;

        /**
          * A date string representing when this object was created.
          * @type {string}
          */
        timeCreated: string;

        /**
          * A date string representing when this object was last updated.
          * @type {string}
          */
        updated: string;

        /**
          * An array of long-lived download URLs. Always contains at least one URL.
          * @type {!Array<string>}
          */
        downloadURLs: string[];
    }

    interface UploadTask {

        /**
          * Listens for events on this task.
          *
          * Events have three callback functions (referred to as `next`, `error`, and
          * `complete`).
          *
          * If only the event is passed, a function that can be used to register the
          * callbacks is returned. Otherwise, the callbacks are passed after the event.
          *
          * Callbacks can be passed either as three separate arguments <em>or</em> as the
          * `next`, `error`, and `complete` properties of an object. Any of the three
          * callbacks is optional, as long as at least one is specified. In addition,
          * when you add your callbacks, you get a function back. You can call this
          * function to unregister the associated callbacks.
          *
          * @example <caption>Pass callbacks separately or in an object.</caption>
          * var next = function(snapshot) {};
          * var error = function(error) {};
          * var complete = function() {};
          *
          * // The first example.
          * uploadTask.on(
          *     firebase.storage.TaskEvent.STATE_CHANGED,
          *     next,
          *     error,
          *     complete);
          *
          * // This is equivalent to the first example.
          * uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
          *   'next': next,
          *   'error': error,
          *   'complete': complete
          * });
          *
          * // This is equivalent to the first example.
          * var subscribe = uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
          * subscribe(next, error, complete);
          *
          * // This is equivalent to the first example.
          * var subscribe = uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
          * subscribe({
          *   'next': next,
          *   'error': error,
          *   'complete': complete
          * });
          *
          * @example <caption>Any callback is optional.</caption>
          * // Just listening for completion, this is legal.
          * uploadTask.on(
          *     firebase.storage.TaskEvent.STATE_CHANGED,
          *     null,
          *     null,
          *     function() {
          *       console.log('upload complete!');
          *     });
          *
          * // Just listening for progress/state changes, this is legal.
          * uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function(snapshot) {
          *   var percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          *   console.log(percent + "% done");
          * });
          *
          * // This is also legal.
          * uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
          *   'complete': function() {
          *     console.log('upload complete!');
          *   }
          * });
          *
          * @example <caption>Use the returned function to remove callbacks.</caption>
          * var unsubscribe = uploadTask.on(
          *     firebase.storage.TaskEvent.STATE_CHANGED,
          *     function(snapshot) {
          *       var percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          *       console.log(percent + "% done");
          *       // Stop after receiving one update.
          *       unsubscribe();
          *     });
          *
          * // This code is equivalent to the above.
          * var handle = uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
          * unsubscribe = handle(function(snapshot) {
          *   var percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          *   console.log(percent + "% done");
          *   // Stop after receiving one update.
          *   unsubscribe();
          * });
          *
          * @param {!firebase.storage.TaskEvent} event The event to listen for.
          * @param {(?function(!Object)|!Object)=} nextOrObserver The `next` function,
          *     which gets called for each item in the event stream, or an observer
          *     object with some or all of these three properties (`next`, `error`,
          *     `complete`).
          * @param {?function(!Error)=} error A function that gets called with an Error
          *     if the event stream ends due to an error.
          * @param {?function()=} complete A function that gets called if the
          *     event stream ends normally.
          * @return {
          *     !function()|
          *     !function(?function(!Object),?function(!Error)=,?function()=)
          *       :!function()}
          *     If only the event argument is passed, returns a function you can use to
          *     add callbacks (see the examples above). If more than just the event
          *     argument is passed, returns a function you can call to unregister the
          *     callbacks.
          */
        on(event: firebase.storage.TaskEvent, nextOrObserver?: { (_0: Object): any /*missing*/ }|Object, error?: { (_0: Error): any /*missing*/ }, complete?: { (): any /*missing*/ }): { (): any /*missing*/ }|{ (_0: { (_0: Object): any /*missing*/ }, _1: { (_0: Error): any /*missing*/ }, _2: { (): any /*missing*/ }): { (): any /*missing*/ } };

        /**
          * Resumes a paused task. Has no effect on a running or failed task.
          * @return {boolean} True if the rusme had an effect.
          */
        resume(): boolean;

        /**
          * Pauses a running task. Has no effect on a paused or failed task.
          * @return {boolean} True if the pause had an effect.
          */
        pause(): boolean;

        /**
          * Cancels a running task. Has no effect on a complete or failed task.
          * @return {boolean} True if the cancel had an effect.
          */
        cancel(): boolean;

        /**
          * A snapshot of the current task state.
          * @type {!firebase.storage.UploadTaskSnapshot}
          */
        snapshot: firebase.storage.UploadTaskSnapshot;
    }

    interface UploadTaskSnapshot {

        /**
          * The number of bytes that have been successfully uploaded so far.
          * @type {number}
          */
        bytesTransferred: number;

        /**
          * The total number of bytes to be uploaded.
          * @type {number}
          */
        totalBytes: number;

        /**
          * The current state of the task.
          * @type {firebase.storage.TaskState}
          */
        state: firebase.storage.TaskState;

        /**
          * Before the upload completes, contains the metadata sent to the server.
          * After the upload completes, contains the metadata sent back from the server.
          * @type {!firebase.storage.FullMetadata}
          */
        metadata: firebase.storage.FullMetadata;

        /**
          * After the upload completes, contains a long-lived download URL for the
          * object. Also accessible in metadata.
          * @type {?string}
          */
        downloadURL: string;

        /**
          * The task of which this is a snapshot.
          * @type {!firebase.storage.UploadTask}
          */
        task: firebase.storage.UploadTask;

        /**
          * The reference that spawned this snapshot's upload task.
          * @type {!firebase.storage.Reference}
          */
        ref: firebase.storage.Reference;
    }

    /**
     * An event that is triggered on a task.
     * @enum {string}
     * @see {@link firebase.storage.UploadTask.prototype.on}
     */
    enum TaskEvent { STATE_CHANGED }

    /**
     * Represents the current state of a running upload.
     * @enum {string}
     */
    enum TaskState { RUNNING, PAUSED, SUCCESS, CANCELED, ERROR }
}

declare namespace firebase {

    /**
     * The namespace for all Firebase Storage functionality.
     * The returned service is initialized with a particular app which contains the
     * project's storage location, or uses the default app if none is provided.
     *
     * Usage (either):
     *
     * ```
     * firebase.storage()
     * firebase.storage(app)
     * ```
     *
     * @namespace
     * @param {!firebase.app.App=} app The app to create a storage service for.
     *     If not passed, uses the default app.
     * @return {!firebase.storage.Storage}
     */
    function storage(app?: firebase.app.App): firebase.storage.Storage;
}



declare module "firebase" {
    export = firebase;
}
