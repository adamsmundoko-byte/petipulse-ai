Build me a full-stack web app called "PetiPulse AI"

APP DESCRIPTION:
An AI-powered petition platform for Africa where supporters sign structured forms, follow causes, like and comment on petitions, and generate trackable share links with cross-channel engagement analytics. Designed for NGOs and grassroots movements to submit credible petitions to Parliament.

BRAND & DESIGN:
Use this exact color palette:
Primary: Deep Indigo #2B3A67
Accent: Vibrant Teal #14B8A6  
Highlight: Coral #FF6B6B
Background: Soft Ivory #F8F7F2
Surface: Pure White #FFFFFF
Text: Charcoal #1F2937
Muted UI: Slate Gray #94A3B8
Style: Professional, clean, trustworthy, mobile-first. WhatsApp share button on every page.

DATABASE: Create these 18 entities with all fields:
1. User: id, full_name, email, avatar_url, auth_provider, provider_user_id, password_hash, role, bio, location, is_verified, is_active, notification_preferences, last_login_at, created_at, updated_at
2. Organization: id, name, slug, description, logo_url, website_url, owner_user_id, member_count, is_verified, settings, created_at, updated_at
3. Petition: id, organization_id, created_by_user_id, title, slug, summary, problem_statement, proposed_solution, target_audience, category, status, visibility, cover_image_url, attachment_ids, target_support_count, current_support_count, current_like_count, current_follower_count, current_comment_count, current_share_count, ai_summary, ai_call_to_action, geo_targeting, published_at, closed_at, created_at, updated_at
4. SupportForm: id, petition_id, user_id, full_name, email, location, phone, comments, is_verified, signed_at
5. Comment: id, petition_id, user_id, parent_comment_id, content, is_flagged, created_at
6. Like: id, petition_id, user_id, created_at
7. Follow: id, petition_id, user_id, created_at
8. Share: id, petition_id, user_id, share_channel, share_link, clicks, created_at
9. Attachment: id, petition_id, file_url, file_type, uploaded_by
10. Notification: id, user_id, type, content, is_read, created_at
11. AnalyticsEvent: id, petition_id, event_type, source, metadata, created_at
12. Role: id, name, permissions
13. OrganizationMember: id, organization_id, user_id, role
14. Category: id, name, slug
15. GeoTarget: id, petition_id, country, region, city
16. AuditLog: id, entity_type, entity_id, action, user_id, timestamp
17. Payment: id, organization_id, amount, purpose, status
18. FormField: id, petition_id, label, type, required, options

FEATURES: 21 Pages + 10 Core Features
PAGES: Landing, Login, Register, Dashboard, Create Petition, Edit Petition, Petition Public Page, Petition Analytics, Organization Page, User Profile, Admin Panel, Search, Categories, Comments, Notifications, Settings, Supporters List, Export Data, About, Pricing, Contact
FEATURES:
1. AI Petition Generator: Auto-write summary, problem_statement, proposed_solution, ai_summary, ai_call_to_action from bullet points
2. Structured Signatures with email/SMS verification
3. Like, Comment, Follow system
4. Trackable Share Links per user and per channel: WhatsApp, Facebook, X, Telegram
5. Cross-channel analytics dashboard
6. Organization workspaces with roles: supporter, creator, moderator, admin
7. File attachments and evidence upload
8. Goal tracker: target_support_count vs current_support_count
9. Geo-targeting for petitions
10. Export signatures to PDF/Excel for Parliament submission

DEMO CONTENT: 
Pre-load 1 organization called "Concerned Citizens of Zimbabwe" with is_verified = true
Pre-load 1 petition called "Protected Occupier Bill 2026" with:
title: "Protected Occupier Bill 2026: End Inhuman Demolitions"
summary: "Protect many families who bought land in good faith from arbitrary demolition"
problem_statement: "One arm of Government sells stands. Another arm sends bulldozers. This violates Section 53 and 74 of the Constitution."
proposed_solution: "Pass the Protected Occupier Bill 2026 to require court orders, 90 days notice, and alternative housing before any demolition."
category: "policy"
status: "published"
target_support_count: 1000000
ai_summary: "This Bill pr
