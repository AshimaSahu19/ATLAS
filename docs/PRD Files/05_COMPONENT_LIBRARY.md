# Component Library

# ATLAS — Where Travel Meets AI

Version: 1.0

Document Type: Frontend Component Library

---

# 1. Purpose

The Component Library defines every reusable UI component used throughout the ATLAS platform. Each component is designed to be modular, responsive, accessible, and reusable. Developers should compose pages using these components instead of creating custom UI for each screen.

---

# 2. Component Standards

Every component must:

• Be reusable
• Support Light and Dark mode
• Be responsive
• Follow the design system
• Support hover, focus, active, disabled states
• Be keyboard accessible
• Maintain consistent spacing and typography
• Support smooth animations where appropriate

---

# 3. Navigation Components

## 3.1 Navbar

Purpose

Primary navigation for public pages.

Contains

• Logo
• Navigation Links
• Search
• Theme Toggle
• Login Button
• Sign Up Button

States

• Default
• Sticky
• Mobile
• Scrolled

Used On

• Home
• About
• Login
• Signup

---

## 3.2 Sidebar

Purpose

Primary navigation after authentication.

Contains

• Dashboard
• Planner
• AI Assistant
• Community
• Bookings
• Lost & Found
• Profile
• Settings

States

• Expanded
• Collapsed
• Mobile Drawer

---

## 3.3 Breadcrumb

Purpose

Display navigation path.

Example

Dashboard > Planner > Itinerary

---

# 4. Buttons

## Primary Button

Purpose

Main call-to-action.

Variants

• Default
• Loading
• Disabled
• Icon
• Full Width

Used For

• Plan Trip
• Login
• Book Now
• Save

---

## Secondary Button

Purpose

Alternative actions.

Examples

Cancel

Back

Preview

---

## Icon Button

Purpose

Compact actions.

Examples

Search

Notifications

Menu

Close

Bookmark

Share

---

# 5. Form Components

## Text Input

Purpose

Collect user text.

States

Default

Focused

Success

Error

Disabled

---

## Search Bar

Purpose

Global search.

Features

Autocomplete

Suggestions

Recent Searches

Voice Search (Future)

---

## Date Picker

Purpose

Travel dates.

Features

Start Date

End Date

Calendar

Validation

---

## Budget Slider

Purpose

Budget selection.

Displays

Minimum

Maximum

Current Budget

---

## Dropdown

Purpose

Select travel preferences.

Supports

Single Select

Multi Select

Searchable

---

## Tag Selector

Purpose

Interest selection.

Examples

Adventure

Nature

Food

Photography

Shopping

History

---

# 6. Cards

## Destination Card

Displays

Destination Image

Name

Description

Rating

Starting Budget

AI Match Percentage

Action Button

---

## Hotel Card

Displays

Image

Price

Rating

Amenities

Distance

Book Button

---

## Restaurant Card

Displays

Image

Cuisine

Rating

Price Level

AI Summary

---

## Activity Card

Displays

Location

Opening Hours

Duration

Popularity

Map Link

---

## Booking Card

Displays

Booking ID

Destination

Status

Travel Dates

Action Buttons

---

## Budget Card

Displays

Total Budget

Remaining Budget

Expense Categories

Progress Bar

---

## Community Card

Displays

Local Recommendation

Images

Votes

Comments

---

## Lost Item Card

Displays

Image

Location

Date

Contact Button

Status

---

# 7. Dashboard Components

## Quick Action Panel

Contains

Plan Trip

Open AI

Bookings

Community

Lost & Found

---

## Statistics Widget

Displays

Trips

Countries

Bookings

Budget

---

## Recent Activity

Displays

Latest Actions

Bookings

Community Activity

---

## Upcoming Trips Widget

Displays

Destination

Date

Countdown

Weather

---

# 8. AI Components

## AI Chat Window

Contains

Conversation

Input

Suggested Questions

Typing Animation

Voice Button (Future)

---

## AI Message Bubble

Types

User

Assistant

System

---

## Suggested Prompt Card

Examples

Plan My Trip

Find Hidden Gems

Budget Trip

Weekend Getaway

---

## AI Processing Timeline

Displays

Planner

↓

Transport

↓

Hotels

↓

Food

↓

Activities

↓

Weather

↓

Budget

↓

Itinerary

Animated in sequence.

---

## Recommendation Card

Displays

Recommendation

Reason

Confidence

AI Explanation

---

# 9. Timeline Components

## Itinerary Timeline

Displays

Day

Morning

Afternoon

Evening

Expandable cards.

---

## Booking Timeline

Displays

Booking Progress

Confirmation

Travel

Completed

---

# 10. Community Components

## Community Feed

Displays

Travel Tips

Recommendations

Events

Hidden Places

---

## Lost & Found Form

Fields

Image

Location

Category

Description

Submit

---

# 11. Notification Components

## Notification Bell

Displays

Unread Count

Dropdown

Recent Notifications

---

## Toast Notification

Types

Success

Error

Warning

Information

Auto dismiss after 5 seconds.

---

# 12. Modal Components

Booking Confirmation

Trip Summary

Delete Confirmation

Image Viewer

AI Explanation

Language Selection

---

# 13. Loading Components

Skeleton Card

Skeleton List

Page Loader

Circular Loader

AI Typing Animation

Progress Bar

---

# 14. Empty State Components

No Trips

No Bookings

No Search Results

No Community Posts

No Lost Items

Each includes:

Illustration

Message

Primary Action

---

# 15. Error Components

404 Page

Network Error

Server Error

Validation Error

Access Denied

Each includes:

Illustration

Description

Retry Button

Return Button

---

# 16. Footer

Contains

About

Privacy Policy

Terms

Contact

Social Links

Copyright

---

# 17. Responsive Behaviour

Desktop

Multi-column layout

Tablet

Reduced spacing

Collapsible sidebar

Mobile

Single column

Bottom navigation

Floating AI Button

---

# 18. Animation Rules

Buttons

Lift on hover

Cards

Scale to 102%

Navbar

Smooth appearance

Sidebar

Slide animation

Dialogs

Fade + Scale

Timeline

Sequential appearance

AI

Typing animation

Processing animation

Progress animation

---

# 19. Accessibility

All components must:

Support keyboard navigation

Include ARIA labels

Provide visible focus states

Support screen readers

Meet WCAG AA contrast requirements

---

# 20. Component Library Summary

Approximately 35 reusable components defined.

All pages within ATLAS should be assembled using this component library to ensure visual consistency, maintainability, and scalability. No page should introduce custom components unless absolutely necessary and approved as part of the design system.