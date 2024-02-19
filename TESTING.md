# Testing

Return back to the [README.md](README.md) file.

The site has succesfully passsed through mupltile verfication testing. Including HTML and CSS validators, Windows PC browsers - Chrome, Firefox and Edge and manual testing. The site aslo proved to be responsive when on devices - including mobile (iPhone 12 mini and Samsung Galaxy S20), ipad and desktop. Lighthouse audit was conducted, where the site met satisfactory requirements. Please see below to find the results. 

## Broswer compatibility

The website has been tested on the following browsers

- Google Chrome: Version 121.0.6167.185 (Official Build) (64-bit)
- Microsoft Edge: Version 121.0.2277.128 (Official build) (64-bit)
- Mozilla Firefox: Version 121.0 (64-bit)
- Apple Safari on macOS Ventura Version 16.5 (18615.2.9.11.4)
- Apple Safari on iOS 16.6.1 (20G81)

## Code Validation

### HTML

[HTML W3C Validator](https://validator.w3.org) to validate all HTML files.


| Page | | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | ![index.html](/documentation/validators/htmls/index.html.png) | Pass.|
| Game | ![game.html](/documentation/validators/htmls/game.html.png) | Pass. |
| About us | ![about.html](/documentation/validators/htmls/about.html.png) | Pass.|
| Reults | ![results.html](/documentation/validators/htmls/results.html.png) | Pass. |
| Email | ![emailTemplate.html](/documentation/validators/htmls/emailTemplate.html.png) | Pass.|
| 404 Page |  ![404.html](/documentation/validators/htmls/404.html.png) | Pass. |


### CSS

 [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator) |![styles.css](/documentation/validators/css/styles.css.png) | Pass. |

### Java Script

 script.js 

 ![script.js](/documentation/validators/js/script.js.png)
 
 email.js
 
 ![email.js](/documentation/validators/js/email.js.png)

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

|Mobile | Desktop | Results |
| --- | --- | --- |
| iPhone SE ![iPhone SE](/documentation/testing/responsiveness-iphoneSEjpg.jpg) | 17" Laptop ![17" Laptop](/documentation/testing/responsiveness-17inch-laptop.jpg)| Works as expected |
| iPhone 12 Pro ![iPhone 12 Pro](/documentation/testing/responsiveness-iphone12-pro.jpg) | 20" Laptop ![20" Laptop](/documentation/testing/responsiveness-20inch-desktop.jpg) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![index mobile](/documentation/validators/lighthouse/index_mobile.png) | ![index desktop](/documentation/validators/lighthouse/index_desktop.png) | Pass. |
| Game | ![game mobile](/documentation/validators/lighthouse/game_mobile.png) | ![game desktop](/documentation/validators/lighthouse/game_desktop.png) | Pass.  |
| About | ![about mobile](/documentation/validators/lighthouse/about_mobile.png) | ![about desktop](/documentation/validators/lighthouse/about_desktop.png) | Pass. |
| Results | ![results mobile](/documentation/validators/lighthouse/results_mobile.png) | ![results desktop](/documentation/validators/lighthouse/results_desktop.png) | Pass. |


## User Story Testing


| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to enter the game with a play button. | ![home user story](/documentation/validators/user-story/home-page-story.png) |
| As a new site user, I would like to easily play and understand the game. | ![game user story](/documentation/validators/user-story/game-story.png) |
| As a new site user, I would like to restart the game as I please.| ![restart user story](/documentation/validators/user-story/restart-story.png) |
| As a new site user, I would like to have help with choosing my correct star sign.| ![help user story](/documentation/validators/user-story/sign-help-story.png) |
| As a new site user, I would like to send the results to my crush by email.| ![email user story](/documentation/validators/user-story/send-email-story.png) |
| As a new site user, I would like my crush to view the results.| ![email template user story](/documentation/readme/features/feature-email-template.jpg) |
| As a returning site user, I would like to learn about "Cupid and Co".| ![lighthouse user story](/documentation/validators/lighthouse/about_mobile.png) |
| As a returning site user, I would like to learn more about about star sign compatibility.| ![result user story](/documentation/validators/user-story/results-story.png) |
| As a site administrator, I should have easy read HTML code so that other developers can work with / add to the code. | ![html validator user story](/documentation/validators/htmls/index.html.png) |
| As a site administrator, I should have easy read CSS code so that other developers can work with / add to the code. | ![css validator user story](/documentation/validators/css/styles.css.png) |
| As a site administrator, I should have easy read JS code so that other developers can work with / add to the code. | ![js validator user story](/documentation/validators/js/script.js.png) |
| As a new site user, I would like to enter the game with a play button. | ![play button user story](/documentation/validators/user-story/home-page-story.png) |
| As a new site user, I would like to easily play and understand the game. | ![game play user story](/documentation/validators/user-story/game-story.png) |
| As a new site user, I would like to restart the game as I please.| ![restart user story](/documentation/validators/user-story/restart-story.png) |
| As a new site user, I would like to have help with choosing my correct star sign.| ![info modal user story](/documentation/validators/user-story/sign-help-story.png) |
| As a new site user, I would like to send the results to my crush by email.| ![send email user story](/documentation/validators/user-story/send-email-story.png) |
| As a new site user, I would like my crush to view the results.| ![email template user story](/documentation/readme/features/feature-email-template.jpg) |
| As a returning site user, I would like to learn about "Cupid and Co".| ![lighthouse user story](/documentation/validators/lighthouse/about_mobile.png) |
| As a returning site user, I would like to learn more about about star sign compatibility.| ![results user story](/documentation/validators/user-story/results-story.png) |
| As a site administrator, I should have easy read HTML code so that other developers can work with / add to the code. | ![html validator user story](/documentation/validators/htmls/index.html.png) |
|  As a site administrator, I should have easy read CSS code so that other developers can work with / add to the code. | ![css validator user story](/documentation/validators/css/styles.css.png) |
|  As a site administrator, I should have easy read JS code so that other developers can work with / add to the code. | ![js validator user story](/documentation/validators/js/script.js.png) |

## Unfixed Bugs

- Custom pink background for email template does not appear for Gmail users, but on others (e.g. Outlook) it works fine. There may be differences in appearance for different email browsers which could be addressed in future fixes.

There are no remaining bugs that we are aware of.