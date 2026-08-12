# Design System

# ATLAS — Where Travel Meets AI

Version: 1.0

Document Type: Design System

---

# 1. Purpose

The ATLAS Design System defines all reusable visual components, design tokens, layouts, spacing rules, typography, iconography, and interaction patterns used throughout the application.

Its objective is to maintain consistency across all pages while enabling rapid frontend development using reusable components.

Every page of ATLAS should be built using this design system rather than designing individual screens independently.

---

# 2. Design Language

The ATLAS interface should communicate four characteristics:

• Intelligent

• Modern

• Premium

• Trustworthy

Every UI element should appear minimal, clean, spacious, and elegant.

Avoid unnecessary decoration.

---

# 3. Design Tokens

## Primary Colors

Primary Blue

#2563EB

Secondary Blue

#3B82F6

Accent Cyan

#06B6D4

Success

#22C55E

Warning

#F59E0B

Danger

#EF4444

---

## Neutral Colors

Background Light

#F8FAFC

Background Dark

#0F172A

Surface Light

#FFFFFF

Surface Dark

#1E293B

Border

#E2E8F0

---

## Text Colors

Primary

#0F172A

Secondary

#475569

Muted

#94A3B8

Disabled

#CBD5E1

White

#FFFFFF

---

# 4. Typography

Primary Font

Inter

Fallback

System UI

Weights

Regular

Medium

Semibold

Bold

Typography Scale

Display Title

72px

Hero Heading

56px

Page Heading

40px

Section Heading

32px

Card Heading

24px

Subheading

20px

Body

16px

Small Text

14px

Caption

12px

Line Height

150%

---

# 5. Grid System

Desktop

12 Columns

Laptop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Maximum Content Width

1440px

Page Padding

32px Desktop

24px Tablet

16px Mobile

---

# 6. Spacing Tokens

XS

8px

S

16px

M

24px

L

32px

XL

48px

2XL

64px

3XL

80px

4XL

96px

Use multiples of 8px throughout the application.

---

# 7. Border Radius

Buttons

14px

Inputs

14px

Cards

20px

Dialogs

24px

Images

20px

Avatars

50%

Badges

999px

---

# 8. Elevation

Level 1

Soft shadow

Cards

Level 2

Hover cards

Level 3

Dialogs

Level 4

Navigation overlays

Avoid strong shadows.

---

# 9. Navigation Components

Primary Navbar

Contains

Logo

Navigation Links

Search

Notifications

Theme Toggle

Profile

---

Sidebar

Contains

Dashboard

Travel Planner

AI Assistant

Itinerary

Bookings

Community

Lost & Found

Profile

Settings

Sidebar remains visible on desktop and collapses on tablet/mobile.

---

# 10. Button System

Primary Button

Blue background

White text

Rounded

Hover elevation

---

Secondary Button

White

Gray border

Dark text

---

Ghost Button

Transparent

Hover background

---

Icon Button

Circular

Minimal

Hover glow

---

Danger Button

Red

Confirmation before execution

---

Loading Button

Spinner

Disabled state

---

# 11. Input Components

Text Input

Search Input

Password Input

Date Picker

Dropdown

Checkbox

Radio Button

Toggle Switch

Slider

Tag Selector

Stepper

Every input must include

Label

Placeholder

Validation

Helper Text

Error State

Success State

---

# 12. Card Library

Travel Card

Displays destination preview.

Hotel Card

Displays hotel information.

Restaurant Card

Displays food recommendations.

Activity Card

Displays tourist attractions.

Booking Card

Displays booking summary.

Budget Card

Displays travel expenses.

Weather Card

Displays weather forecast.

Community Card

Displays local insights.

Lost Item Card

Displays lost & found reports.

Analytics Card

Displays dashboard metrics.

---

# 13. Modal System

Confirmation Modal

Booking Modal

Delete Confirmation

Image Preview

Trip Summary

AI Explanation

Every modal should include:

Title

Description

Primary Action

Secondary Action

Close Button

---

# 14. AI Components

AI Chat Window

Typing Indicator

Thinking Animation

Suggested Prompts

Response Cards

Recommendation Cards

Processing Timeline

Agent Status Panel

Confidence Indicator

Explanation Panel

The AI interface should feel conversational rather than technical.

---

# 15. Timeline Components

Trip Timeline

Booking Timeline

Activity Timeline

Travel History

Timeline cards should expand smoothly when selected.

---

# 16. Data Visualization

Progress Bars

Circular Progress

Pie Charts

Line Charts

Bar Charts

Budget Breakdown

Trip Statistics

Charts should be clean and interactive.

---

# 17. Tables

Booking History

Community Reports

Lost & Found Reports

Travel Expenses

Requirements

Sticky headers

Sorting

Filtering

Pagination

Responsive scrolling

---

# 18. Badges

Upcoming

Completed

Cancelled

Popular

Recommended

Budget

Premium

AI Recommended

Verified

Trending

Badges should use subtle colors.

---

# 19. Avatar System

User Avatar

AI Avatar

Community Avatar

Fallback Initials

Rounded appearance.

---

# 20. Image Guidelines

Images should be:

High resolution

Bright

Travel-focused

Natural lighting

Rounded corners

Avoid stock-photo appearance.

---

# 21. Loading Components

Skeleton Cards

Skeleton Lists

Progress Bars

Circular Loader

Typing Animation

AI Processing Animation

Loading should never leave blank areas.

---

# 22. Empty States

Every module requires a custom empty state.

Include

Illustration

Title

Description

Primary Action

Examples

No Trips

No Bookings

No Community Posts

No Lost Items

---

# 23. Error Components

Friendly illustration

Clear explanation

Retry Button

Return Button

Support Link (future)

---

# 24. Motion Design

Duration

150ms

250ms

400ms

Animations

Fade

Scale

Slide

Expand

Collapse

Card Lift

Button Ripple

Page Transition

Animations should enhance usability without slowing navigation.

---

# 25. Responsive Components

Desktop

Permanent sidebar

Tablet

Collapsible sidebar

Mobile

Bottom navigation

Floating AI Assistant button

Cards automatically resize based on viewport.

---

# 26. Theme System

Support:

Light Theme

Dark Theme

System Theme

Theme changes should be instantaneous without page refresh.

---

# 27. Accessibility Standards

Minimum contrast ratio

WCAG compliant

Keyboard navigation

Screen reader support

Visible focus indicators

Large touch targets

Accessible forms

---

# 28. Reusability Rules

Every component should:

Be reusable

Accept configurable properties

Support light and dark themes

Be responsive

Follow the spacing system

Avoid hardcoded values

---

# 29. Component Naming Convention

Examples

PrimaryButton

TravelCard

BudgetCard

BookingTimeline

WeatherWidget

CommunityCard

AIChatWindow

PlannerStepper

TripSummaryCard

LostItemCard

Use consistent PascalCase naming.

---

# 30. Design System Summary

The ATLAS Design System establishes a unified visual language across the platform by standardizing colors, typography, spacing, components, layouts, and interactions.

Every interface should reinforce the product identity of ATLAS as a premium AI-powered travel operating system rather than a conventional travel booking website.

This design system serves as the single source of truth for all frontend development.