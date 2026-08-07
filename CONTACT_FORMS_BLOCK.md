# Contact form block

## Audit

Visitor routes and form coverage:

- `/` renders `src/components/Contact/Contact.jsx`, the site's combined booking/enquiry form. It collects name, phone, email, arrival/departure dates, guest count, and a message, then posts to the Telegram contact API.
- `/rooms` contains booking links that return visitors to `/#contact`; it does not render a separate form.
- `src/pages/RoomsPage.jsx` is not registered in the router. It contains booking links but no form.
- No separate general contact, callback, quote, event, newsletter, reservation modal, or page-specific visitor form is present.

The form is intentionally still visible and fillable. Its submit button and submit handler are both gated by the same central `contactFormsBlocked` value exported from `src/config.js`.

## Re-enable submission

Forms are blocked indefinitely by default. Set this build-time environment value and rebuild/deploy:

```text
VITE_CONTACT_FORMS_BLOCKED=false
```

Any value other than the exact string `false`, including an unset value, keeps forms blocked.

The unavailable message uses the published hotel phone number from `hotelConfig.contact.phone`; it does not duplicate a contact value locally.

## SEO and structured data

The site's Hotel JSON-LD publishes the phone number but has no booking/reservation `potentialAction` or form endpoint. No structured action needs conditional removal while the form is blocked. The canonical and social metadata describe the hotel rather than a working form and remain accurate.
