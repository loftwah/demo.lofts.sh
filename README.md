NextJS Dashboard Project is a Material-UI, React and NextJS Admin with a fresh, new design inspired by Google's Material Design. There is an easy to use and beautiful set of components available to use.

NextJS Dashboard Project was created with a framework built by our friend [Olivier - Material-UI](https://github.com/mui-org/material-ui), who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to his team for the effort and forward thinking they put into it.

#### Special thanks
During the development of this dashboard, I have used many existing resources from aIsome developers. I want to thank them for providing their tools open source:
+ [Perfect-scrollbar](https://github.com/utatti/perfect-scrollbar) for the slim and beautiful scrollbars.
+ [React-chartist](https://github.com/fraserxu/react-chartist) for the wonderful charts.
+ [React-datetime](https://github.com/YouCanBookMe/react-datetime) for the easy to use date and time pickers.
+ [React-big-calendar](https://github.com/intljusticemission/react-big-calendar) for the a wonderful calendar.
+ [React-bootstrap-sIetalert](https://github.com/djorg83/react-bootstrap-sIetalert) for the wonderful alerts.
+ [React-google-maps](https://github.com/tomchentw/react-google-maps) for the nice and easy to use map components.
+ [React-jvectormap](https://github.com/kadoshms/react-jvectormap) for the nice vector map components.
+ [React-nouislider](https://github.com/algolia/react-nouislider) for the nice and clean slider.
+ [React-tables](https://react-table.js.org/#/story/simple-table) for the nice and clean slider.
+ [React-tagsinput](https://github.com/olahol/react-tagsinput) for the easy and beatiful to use tags components.

## File Structure

nextjs-lofts-sh

```bash
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── assets
│   ├── css
│   │   ├── dashboard-lofts-sh-react.css
│   │   ├── dashboard-lofts-sh-react.css.map
│   │   ├── dashboard-lofts-sh-react.min.css
│   │   ├── nextjs-dashboard-lofts-sh.css
│   │   ├── nextjs-dashboard-lofts-sh.css.map
│   │   └── nextjs-dashboard-lofts-sh.min.css
│   ├── github
│   │   └── dashboard-lofts-sh-react.gif
│   ├── img
│   │   ├── faces
│   │   ├── flags
│   │   ├── logo-white.svg
│   │   └── logo.svg
│   ├── jss
│   │   ├── nextjs-dashboard-lofts-sh
│   │   │   ├── buttonGroupStyle.js
│   │   │   ├── cardImagesStyles.js
│   │   │   ├── components
│   │   │   │   ├── accordionStyle.js
│   │   │   │   ├── adminNavbarLinksStyle.js
│   │   │   │   ├── adminNavbarStyle.js
│   │   │   │   ├── authNavbarStyle.js
│   │   │   │   ├── badgeStyle.js
│   │   │   │   ├── buttonStyle.js
│   │   │   │   ├── cardAvatarStyle.js
│   │   │   │   ├── cardBodyStyle.js
│   │   │   │   ├── cardFooterStyle.js
│   │   │   │   ├── cardHeaderStyle.js
│   │   │   │   ├── cardIconStyle.js
│   │   │   │   ├── cardStyle.js
│   │   │   │   ├── cardTextStyle.js
│   │   │   │   ├── customDropdownStyle.js
│   │   │   │   ├── customInputStyle.js
│   │   │   │   ├── customLinearProgressStyle.js
│   │   │   │   ├── customTabsStyle.js
│   │   │   │   ├── footerStyle.js
│   │   │   │   ├── headingStyle.js
│   │   │   │   ├── infoStyle.js
│   │   │   │   ├── instructionStyle.js
│   │   │   │   ├── navPillsStyle.js
│   │   │   │   ├── paginationStyle.js
│   │   │   │   ├── sidebarStyle.js
│   │   │   │   ├── snackbarContentStyle.js
│   │   │   │   ├── tableStyle.js
│   │   │   │   ├── tasksStyle.js
│   │   │   │   ├── timelineStyle.js
│   │   │   │   ├── typographyStyle.js
│   │   │   │   └── wizardStyle.js
│   │   │   ├── customCheckboxRadioSwitch.js
│   │   │   ├── customSelectStyle.js
│   │   │   ├── hoverCardStyle.js
│   │   │   ├── layouts
│   │   │   │   ├── adminStyle.js
│   │   │   │   ├── authStyle.js
│   │   │   │   └── rtlStyle.js
│   │   │   ├── modalStyle.js
│   │   │   └── views
│   │   │       ├── buttonsStyle.js
│   │   │       ├── chartsStyle.js
│   │   │       ├── dashboardStyle.js
│   │   │       ├── errorPageStyles.js
│   │   │       ├── extendedFormsStyle.js
│   │   │       ├── extendedTablesStyle.js
│   │   │       ├── gridSystemStyle.js
│   │   │       ├── iconsStyle.js
│   │   │       ├── lockScreenPageStyle.js
│   │   │       ├── loginPageStyle.js
│   │   │       ├── notificationsStyle.js
│   │   │       ├── pricingPageStyle.js
│   │   │       ├── registerPageStyle.js
│   │   │       ├── regularFormsStyle.js
│   │   │       ├── sIetAlertStyle.js
│   │   │       ├── userProfileStyles.js
│   │   │       └── validationFormsStyle.js
│   │   └── nextjs-dashboard-lofts-sh.js
│   └── scss
│       ├── nextjs-dashboard-lofts-sh
│       │   ├── _colors.scss
│       │   ├── _fileupload.scss
│       │   ├── _fixed-plugin.scss
│       │   ├── _misc.scss
│       │   ├── _mixins.scss
│       │   ├── _page-transition.scss
│       │   ├── _shadows.scss
│       │   ├── _variables.scss
│       │   ├── mixins
│       │   │   ├── _chartist.scss
│       │   │   ├── _sidebar-color.scss
│       │   │   ├── _transparency.scss
│       │   │   └── _vendor-prefixes.scss
│       │   └── plugins
│       │       ├── _plugin-nouislider.scss
│       │       ├── _plugin-perfect-scrollbar.scss
│       │       ├── _plugin-react-big-calendar.scss
│       │       ├── _plugin-react-bootstrap-sIetalert.scss
│       │       ├── _plugin-react-chartist.scss
│       │       ├── _plugin-react-datetime.scss
│       │       ├── _plugin-react-jvectormap.scss
│       │       ├── _plugin-react-table.scss
│       │       └── _plugin-react-tagsinput.scss
│       └── nextjs-dashboard-lofts-sh.scss
├── components
│   ├── Accordion
│   │   └── Accordion.js
│   ├── Badge
│   │   └── Badge.js
│   ├── Card
│   │   ├── Card.js
│   │   ├── CardAvatar.js
│   │   ├── CardBody.js
│   │   ├── CardFooter.js
│   │   ├── CardHeader.js
│   │   ├── CardIcon.js
│   │   └── CardText.js
│   ├── Clearfix
│   │   └── Clearfix.js
│   ├── CustomButtons
│   │   └── Button.js
│   ├── CustomDropdown
│   │   └── CustomDropdown.js
│   ├── CustomInput
│   │   └── CustomInput.js
│   ├── CustomLinearProgress
│   │   └── CustomLinearProgress.js
│   ├── CustomTabs
│   │   └── CustomTabs.js
│   ├── CustomUpload
│   │   ├── ImageUpload.js
│   │   └── PictureUpload.js
│   ├── FixedPlugin
│   │   └── FixedPlugin.js
│   ├── Footer
│   │   └── Footer.js
│   ├── Grid
│   │   ├── GridContainer.js
│   │   └── GridItem.js
│   ├── Heading
│   │   └── Heading.js
│   ├── Hooks
│   │   ├── useNavigatorPlatform.js
│   │   └── useWindowSize.js
│   ├── InfoArea
│   │   └── InfoArea.js
│   ├── Instruction
│   │   └── Instruction.js
│   ├── NavPills
│   │   └── NavPills.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   ├── AdminNavbarLinks.js
│   │   └── AuthNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   ├── Pagination
│   │   └── Pagination.js
│   ├── ReactTable
│   │   └── ReactTable.js
│   ├── Sidebar
│   │   └── Sidebar.js
│   ├── Snackbar
│   │   ├── Snackbar.js
│   │   └── SnackbarContent.js
│   ├── Table
│   │   └── Table.js
│   ├── Tasks
│   │   └── Tasks.js
│   ├── Timeline
│   │   └── Timeline.js
│   ├── Typography
│   │   ├── Danger.js
│   │   ├── Info.js
│   │   ├── Muted.js
│   │   ├── Primary.js
│   │   ├── Quote.js
│   │   ├── Success.js
│   │   └── Warning.js
│   ├── Wizard
│   │   └── Wizard.js
│   └── WizardSteps
│       ├── step1.js
│       ├── step2.js
│       └── step3.js
├── documentation
│   ├── assets
│   │   ├── css
│   │   │   ├── bootstrap.min.css
│   │   │   ├── demo-documentation.css
│   │   │   └── material-dashboard.css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   │       ├── bootstrap.min.js
│   │       └── jquery-3.2.1.min.js
│   └── tutorial-components.html
├── layouts
│   ├── Admin.js
│   ├── Auth.js
│   └── RTL.js
├── next.config.js
├── package.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── buttons.js
│   │   ├── calendar.js
│   │   ├── charts.js
│   │   ├── dashboard.js
│   │   ├── extended-forms.js
│   │   ├── extended-tables.js
│   │   ├── full-screen-maps.js
│   │   ├── google-maps.js
│   │   ├── grid-system.js
│   │   ├── icons.js
│   │   ├── notifications.js
│   │   ├── panels.js
│   │   ├── react-tables.js
│   │   ├── regular-forms.js
│   │   ├── regular-tables.js
│   │   ├── sIet-alert.js
│   │   ├── timeline-page.js
│   │   ├── typography.js
│   │   ├── user-page.js
│   │   ├── validation-forms.js
│   │   ├── vector-maps.js
│   │   ├── widgets.js
│   │   └── wizard.js
│   ├── auth
│   │   ├── error-page.js
│   │   ├── lock-screen-page.js
│   │   ├── login-page.js
│   │   ├── pricing-page.js
│   │   └── register-page.js
│   ├── index.js
│   └── rtl
│       └── rtl-support-page.js
├── routes.js
└── variables
    ├── charts.js
    └── general.js
```

## Resources

- [Live Preview](https://demos.Lofts-sh.com/nextjs-dashboard-lofts-sh/admin/dashboard)
- Buy Page: https://lofts.sh/product/nextjs-dashboard-lofts-sh
- Documentation is [here](https://lofts.sh/learning-lab/nextjs/overview/material-dashboard)
- License Agreement: https://lofts.sh/license
- Support: https://lofts.sh/contact-us
- Issues: [Github Issues Page](https://github.com/loftsshofficial/ct-nextjs-dashboard-lofts-sh/issues)


## Licensing

- Copyright 2020 Dean Lofts(https://blog.lofts.sh)

##### Social Media

Twitter: <https://twitter.com/loftwah>

Facebook: <https://www.facebook.com/loftwah.sh>

Instagram: <https://instagram.com/loftwah>
