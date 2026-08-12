# Page Specifications

# Module 02 — Dashboard

Project: ATLAS — Where Travel Meets AI

Version: 1.0

---

# DASHBOARD

Route

/dashboard

---

# Purpose

The Dashboard serves as the central command center of ATLAS after user authentication. It provides users with an overview of their travel activities, AI-generated recommendations, upcoming trips, and quick access to all major platform features.

The dashboard should feel intelligent, personalized, and dynamic rather than static.

---

# Layout

Top Navigation

↓

Welcome Banner

↓

Quick Statistics

↓

Quick Actions

↓

Upcoming Trips

↓

AI Recommendations

↓

Travel Inspiration

↓

Community Insights

↓

Recent Activity

↓

Footer

---

# Top Navigation

Components

• Search Bar

• Notifications

• Language Selector

• Theme Toggle

• User Profile

---

# Welcome Banner

Displays:

"Welcome back, Aditya 👋"

Subtitle

"Ready for your next adventure?"

Background

Animated travel illustration with subtle floating elements.

CTA Button

Plan New Trip

---

# Quick Statistics

Display four interactive cards.

Cards

• Total Trips

• Countries Explored

• Total Savings

• AI Recommendations Used

Hover Effect

Lift animation

Count-up animation

---

# Quick Actions

Grid containing:

• Plan a Trip

• Open AI Assistant

• Community

• Lost & Found

• Booking History

• Profile

Each action uses an icon with gradient background.

---

# Upcoming Trips

Displays upcoming itineraries.

Each card contains:

Destination Image

Trip Date

Budget

Duration

Weather Preview

Status

Primary Action

View Details

---

# AI Recommendations

Dynamic recommendation cards.

Examples

• Best Weekend Trips

• Hidden Destinations

• Budget-Friendly Packages

• Trending Places

Each card includes:

Destination

Reason

Match Percentage

Estimated Budget

Explore Button

---

# Travel Inspiration

Horizontal scrolling section.

Includes

Beautiful destination cards

Popular experiences

Adventure trips

Family trips

Solo trips

---

# Community Insights

Displays

Trending travel tips

Local recommendations

Seasonal events

Hidden gems

Each insight contains

Image

Location

Summary

Read More

---

# Recent Activity

Timeline format.

Examples

Trip Created

Booking Completed

Itinerary Updated

Community Post Viewed

Lost Item Reported

---

# Components Used

Navbar

Sidebar

StatisticsCard

ActionCard

TripCard

RecommendationCard

CommunityCard

Timeline

Footer

---

# Empty State

If the user has no travel history:

Illustration

Headline

"No trips yet."

Button

Start Planning

---

# Loading State

Skeleton cards

Animated placeholders

Progress shimmer

---

# Responsive Behavior

Desktop

4-column statistics

3-column cards

Tablet

2-column layout

Mobile

Single-column cards

Sticky bottom navigation

---

# Navigation

Dashboard → Planner

Dashboard → AI Assistant

Dashboard → Community

Dashboard → Bookings

Dashboard → Profile

Dashboard → Settings

---

# Accessibility

Keyboard shortcuts

ARIA labels

Screen-reader support

High contrast mode

---

# Summary

The Dashboard should function as the personalized control center of ATLAS, offering users quick insights, AI-powered recommendations, and direct access to all primary features.

=====================================================================

# Module 03 — Travel Planner

Route

/dashboard/planner

---

# Purpose

The Travel Planner is the core feature of ATLAS. It collects user travel preferences through a guided multi-step experience and initiates the AI-powered planning workflow.

The planner should feel conversational and intuitive rather than like a traditional form.

---

# User Journey

Open Planner

↓

Enter Destination

↓

Choose Travel Dates

↓

Select Budget

↓

Choose Travelers

↓

Select Travel Preferences

↓

Choose Accessibility Needs

↓

Select Interests

↓

Review Information

↓

Generate AI Plan

---

# Planner Layout

Progress Stepper

↓

Question Card

↓

Input Component

↓

Navigation Buttons

Previous | Next

---

# Step 1 — Destination

Input

Search destination

Suggestions

Popular destinations

Recent searches

Trending places

Map preview

---

# Step 2 — Travel Dates

Calendar picker

Displays

Departure

Return

Duration

Season

Holiday alerts

---

# Step 3 — Budget

Budget slider

Preset options

Budget

Standard

Luxury

Displays estimated cost dynamically.

---

# Step 4 — Travelers

Options

Solo

Couple

Family

Friends

Business

Number selector

Adults

Children

Infants

---

# Step 5 — Travel Preferences

Transportation

Hotel Type

Food Preference

Accommodation Style

Travel Pace

Each option displayed using interactive cards.

---

# Step 6 — Interests

Selectable chips.

Examples

Adventure

Nature

Photography

History

Shopping

Food

Nightlife

Wildlife

Mountains

Beach

Culture

---

# Step 7 — Accessibility

Options

Wheelchair Friendly

Senior Citizen

Kid Friendly

Pet Friendly

Medical Assistance

---

# Step 8 — Review

Display summary cards.

Destination

Dates

Budget

Travelers

Preferences

Interests

Accessibility

Buttons

Edit

Generate Plan

---

# Step 9 — AI Processing

Full-screen animation.

Shows:

Planner Agent

↓

Travel Agent

↓

Hotel Agent

↓

Food Agent

↓

Activity Agent

↓

Weather Agent

↓

Community Agent

↓

Budget Optimizer

↓

Generating Personalized Itinerary...

Display estimated completion time.

---

# Final Screen

Button

View My Itinerary

Redirect

/dashboard/itinerary

---

# Components Used

Stepper

Search Bar

Calendar

Budget Slider

Selection Cards

Interest Chips

Review Cards

AI Processing Timeline

Progress Indicator

Buttons

---

# Validation

Destination required

Dates required

Budget required

Travelers required

At least one interest selected

---

# Animations

Page transitions

Step transitions

Progress animation

AI thinking animation

Button hover

Card selection animation

---

# Empty State

First-time users receive onboarding tips before starting the planner.

---

# Responsive Behavior

Desktop

Centered wizard

Tablet

Compact cards

Mobile

Full-screen stepper

Sticky Next button

---

# Navigation

Dashboard

↓

Planner

↓

AI Processing

↓

Personalized Itinerary

---

# Summary

The Travel Planner is designed as a guided AI conversation rather than a traditional travel booking form. Each step progressively collects user preferences, making the planning experience intuitive, engaging, and personalized while leading naturally into AI-generated itinerary creation.