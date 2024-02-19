# Testing

Return back to the [README.md](README.md) file.

The site has succesfully passsed through mupltile verfication testing. Including HTML and CSS validators, Windows PC browsers - Chrome, Firefox and Edge and manual testing. The site aslo proved to be responsive when on devices - including mobile (iPhone 12 mini and Samsung Galaxy S20), ipad and desktop. Lighthouse audit was conducted, where the site met satisfactory requirements. Please see below to find the results. 

## Code Validation

### HTML

[HTML W3C Validator](https://validator.w3.org) to validate all HTML files.


| Page | | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](/documentation/validators/htmls/index.html.png) | Pass.|
| Game | ![screenshot](/documentation/validators/htmls/game.html.png) | Pass. |
| About us | ![screenshot](/documentation/validators/htmls/about.html.png) | Pass.|
| Reults | ![screenshot](/documentation/validators/htmls/results.html.png) | Pass. |
| Email | ![screenshot](/documentation/validators/htmls/emailTemplate.html.png) | Pass.|
| 404 Page |  ![screenshot](/documentation/validators/htmls/404.html.png) | Pass. |


### CSS

 [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw]|![screenshot](/documentation/validators/css/styles.css.png) | Pass. |

### Java Script

 Script | ![screenshot](/documentation/validators/js/script.js.png)
 Email | ![screenshot](/documentation/validators/js/email.js.png)

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Game | About | Results| Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile | ![screenshot](/documentation/validators/lighthouse/index_mobile.png) | ![screenshot](/documentation/validators/lighthouse/game_mobile.png) | ![screenshot](/documentation/validators/lighthouse/about_mobile.png)| ![screenshot](/documentation/validators/lighthouse/results_mobile.png) | Works as expected |
| Desktop| ![screenshot](/documentation/validators/lighthouse/index_desktop.png) | ![screenshot](/documentation/validators/lighthouse/game_desktop.png) | ![screenshot](/documentation/validators/lighthouse/about_desktop.png) | ![screenshot](/documentation/validators/lighthouse/results_desktop.png) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](/documentation/validators/lighthouse/index_mobile.png) | ![screenshot](/documentation/validators/lighthouse/index_desktop.png) | Pass. |
| Game | ![screenshot](/documentation/validators/lighthouse/about_mobile.png) | ![screenshot](/documentation/validators/lighthouse/game_desktop.png) | Pass.  |
| About | ![screenshot](/documentation/validators/lighthouse/about_mobile.png) | ![screenshot](/documentation/validators/lighthouse/about_desktop.png) | Pass. |
| Results | ![screenshot](/documentation/validators/lighthouse/results_mobile.png) | ![screenshot](/documentation/validators/lighthouse/results_desktop.png) | Pass. |


## User Story Testing


| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to enter the game with a play button. | ![screenshot](/documentation/validators/user-story/home-page-story.png) |
| As a new site user, I would like to easily play and understand the game. | ![screenshot](/documentation/validators/user-story/game-story.png) |
| As a new site user, I would like to restart the game as I please.| ![screenshot](/documentation/validators/user-story/restart-story.png) |
| As a new site user, I would like to have help with choosing my correct star sign.| ![screenshot](/documentation/validators/user-story/sign-help-story.png) |
| As a new site user, I would like to send the results to my crush by email.| ![screenshot](/documentation/validators/user-story/send-email-story.png) |
| As a new site user, I would like my crush to view the results.| ![screenshot](/documentation/readme/features/feature-email-template.jpg) |
| As a returning site user, I would like to learn about "Cupid and Co".| ![screenshot](/documentation/validators/lighthouse/about_mobile.png) |
| As a returning site user, I would like to learn more about about star sign compatibility.| ![screenshot](/documentation/validators/user-story/results-story.png) |
| As a site administrator, I should have easy read HTML code so that other developers can work with / add to the code. | ![screenshot](/documentation/validators/htmls/index.html.png) |
|  As a site administrator, I should have easy read CSS code so that other developers can work with / add to the code. | ![screenshot](/documentation/validators/css/styles.css.png) |
|  As a site administrator, I should have easy read JS code so that other developers can work with / add to the code. | ![screenshot](/documentation/validators/js/script.js.png) |

## Unfixed Bugs

- Colour not showing in the sent email. 

- Add to the testing file - heart/letter sticker missing on mobile devices.

- Custom pink background for email template does not appear for Gmail users, but on others (e.g. Outlook) it works fine. There may be differences in appearance for different email browsers which could be addressed in future fixes.

There are no remaining bugs that we are aware of.