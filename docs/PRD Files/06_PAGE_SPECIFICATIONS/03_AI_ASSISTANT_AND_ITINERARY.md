# Page Specifications

# Module 03 — AI Assistant & Personalized Itinerary

Project: ATLAS — Where Travel Meets AI

Version: 1.0

---

# AI ASSISTANT

Route

/dashboard/assistant

---

# Purpose

The AI Assistant is the central intelligence of ATLAS. It provides users with conversational travel assistance before, during, and after trip planning. Unlike a generic chatbot, the AI Assistant understands travel context, user preferences, and previously planned itineraries to deliver personalized recommendations and explanations.

The AI Assistant should feel like a professional travel consultant rather than a search engine.

---

# Layout

Sidebar

↓

Conversation Panel

↓

Suggested Prompts

↓

Input Area

↓

AI Action Panel

---

# Header

Contains

• AI Avatar

• Assistant Name

• Current Status (Online)

• New Chat

• Chat History

---

# Conversation Panel

Displays

User Messages

↓

AI Responses

↓

Recommendation Cards

↓

Interactive Buttons

Messages should support:

• Text

• Images

• Destination Cards

• Hotel Cards

• Restaurant Cards

• Budget Cards

• Maps Preview

• Weather Preview

---

# Suggested Prompts

Examples

• Plan my weekend trip

• Best places near me

• Find hidden gems

• Reduce my travel budget

• Suggest local food

• Family-friendly destinations

• Adventure trips under ₹20,000

Selecting a prompt automatically starts a conversation.

---

# Input Area

Components

• Text Field

• Voice Button (Future)

• Attachment Button (Future)

• Send Button

Placeholder

"Ask anything about your next journey..."

---

# AI Response Components

The AI may respond with:

• Destination Suggestions

• Hotel Recommendations

• Restaurant Recommendations

• Activities

• Budget Summary

• Maps Preview

• Community Insights

• Weather Alerts

• Travel Tips

Each recommendation includes a "Why Recommended" button.

---

# AI Explanation Panel

Purpose

Increase trust by explaining recommendations.

Displays

• Matching Preferences

• Budget Compatibility

• Review Summary

• Distance

• Weather Suitability

• AI Confidence Score

---

# Conversation Features

Users can:

• Edit previous prompts

• Copy responses

• Save recommendations

• Add recommendation to itinerary

• Share conversation

• Clear chat history

---

# Empty State

Illustration

Message

"Hi! I'm your AI Travel Assistant. How can I help you today?"

Suggested prompts displayed below.

---

# Loading State

Animated typing indicator

Thinking animation

Progress dots

Skeleton recommendation cards

---

# Components Used

Navbar

Sidebar

Chat Window

Message Bubble

Recommendation Card

Prompt Card

Explanation Panel

Input Bar

Floating Action Button

---

# Navigation

Dashboard

↓

AI Assistant

↓

Planner

↓

Itinerary

---

# PERSONALIZED ITINERARY

Route

/dashboard/itinerary

---

# Purpose

The Personalized Itinerary presents the final AI-generated travel plan in a structured and visually engaging timeline. It combines transportation, accommodation, food, activities, weather, and budgeting into one unified travel experience.

The itinerary should help users understand not only what to do but also why each recommendation was selected.

---

# Layout

Trip Overview

↓

Budget Summary

↓

Interactive Timeline

↓

Maps Section

↓

Recommendation Explanations

↓

Quick Actions

---

# Trip Overview

Displays

• Destination

• Cover Image

• Travel Dates

• Number of Travelers

• Total Budget

• Estimated Savings

• Weather Overview

• Overall AI Match Percentage

---

# Budget Summary

Visual cards showing:

Transportation

Hotel

Food

Activities

Emergency Buffer

Remaining Budget

Interactive pie chart representing expense distribution.

---

# Interactive Timeline

The itinerary is displayed day by day.

Each day contains:

Morning

↓

Afternoon

↓

Evening

↓

Night

Each activity card displays:

Time

Location

Duration

Estimated Cost

Transportation

Weather

AI Notes

Cards expand on click.

---

# Maps Section

Displays

Interactive route preview

Nearby attractions

Estimated travel time

Daily route overview

Future support:

Live Maps integration

---

# Recommendation Explanation

Each recommendation contains:

Reason Selected

↓

Alternative Option

↓

Advantages

↓

Potential Limitations

↓

Confidence Score

↓

Community Feedback Summary

Purpose

Allow users to understand AI decision-making.

---

# Community Recommendations

Displays

Popular local food

Hidden places

Seasonal festivals

Safety tips

Local experiences

Community ratings

---

# Quick Actions

Buttons

Edit Itinerary

Save Trip

Download PDF

Share Trip

Mock Booking

Ask AI

---

# Export Options

Users can export:

Travel Summary

Day-wise Itinerary

Budget Report

Packing Checklist

PDF generation supported in future versions.

---

# Empty State

Illustration

Message

"No itinerary generated yet."

Primary Button

Plan Your First Trip

---

# Loading State

Skeleton timeline

Animated budget cards

Progress indicator

Route loading animation

---

# Components Used

Timeline

Budget Cards

Map Preview

Recommendation Card

Community Card

Quick Action Panel

Charts

Statistics Cards

---

# Navigation

Planner

↓

AI Processing

↓

Personalized Itinerary

↓

Mock Booking

↓

Booking History

---

# Responsive Behaviour

Desktop

Split layout

Timeline + Maps

Tablet

Vertical timeline

Compact cards

Mobile

Single-column timeline

Sticky quick actions

Collapsible budget section

---

# Accessibility

Keyboard navigation

Screen reader support

ARIA labels

Large touch targets

High contrast support

---

# Summary

The AI Assistant and Personalized Itinerary together form the core intelligence of ATLAS. The AI Assistant enables natural interaction with users, while the Personalized Itinerary transforms user preferences into a structured, explainable, and actionable travel plan. These pages emphasize transparency, personalization, and ease of use, distinguishing ATLAS from traditional travel booking platforms.