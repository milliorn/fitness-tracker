/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// ---- Parent commands ----
Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
});

Cypress.Commands.add("getAvatar", () => {
  // Yields a jQuery collection of the Avatar <img>
  return cy.get('main img[alt="Homepage Logo"]', {
    timeout: 10_000,
  }) as Cypress.Chainable<JQuery<HTMLImageElement>>;
});

// ---- Child commands ----
Cypress.Commands.add(
  "assertImageDecoded",
  { prevSubject: ["element"] },
  (subject: JQuery<HTMLElement>) => {
    // Narrow to <img>
    const el = subject.get(0) as HTMLImageElement | undefined;
    if (!el) throw new Error("Expected an <img> element subject");
    if (el.tagName !== "IMG") {
      throw new Error(`Expected <img> but got <${el.tagName.toLowerCase()}>`);
    }

    // Decode checks
    expect(el.complete, "image is complete").to.eq(true);
    expect(el.naturalWidth, "image naturalWidth").to.be.greaterThan(0);

    // Return a Chainable
    return cy.wrap(subject as JQuery<HTMLImageElement>);
  },
);

// ---- Utilities for focus-driven tests ----
Cypress.Commands.add("primeFocus", () => {
  cy.window().then((w) => w.focus());
  cy.get("body").click(0, 0);
});

// ---- Type augmentations ----
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /** Visit the Home page ('/'). */
      visitHome(): Chainable<void>;

      /** Get the Home Avatar <img> as a jQuery subject. */
      getAvatar(): Chainable<JQuery<HTMLImageElement>>;

      /**
       * Assert that a subject <img> has finished loading and decoded.
       * Chain after commands that yield an element.
       */
      assertImageDecoded(): Chainable<JQuery<HTMLImageElement>>;

      /** Prepare focus for keyboard navigation tests. */
      primeFocus(): Chainable<void>;
    }
  }
}
export {};
