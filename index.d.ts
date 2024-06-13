// Type definitions for react-chat-widget v3.0.0
// Project: <https://github.com/Wolox/react-chat-widget>
// Definitions by: Martín Callegari <https://github.com/mcallegari10>

import { ElementType } from 'react';

declare const Widget: ElementType;

export function addUserMessage(chatId: string ,text: string): void;
export function addUserMessage(chatId: string, text: string, id: string): void;

export function addOlderMessages(chatId: string, component: ElementType, props: any): void;
export function addOlderMessages(chatId: string, component: ElementType, props: any, showAvatar: boolean): void;
export function addOlderMessages(chatId: string, component: ElementType, props: any, showAvatar: boolean, id: string): void;

export function addResponseMessage(chatId: string, text: string): void;
export function addResponseMessage(chatId: string, text: string, id: string): void;

export function addLinkSnippet(chatId: string, link: { link: string, title: string, target?: string }): void;
export function addLinkSnippet(chatId: string, link: { link: string, title: string, target?: string }, id: string): void;

export function renderCustomComponent(chatId: string, component: ElementType, props: any): void;
export function renderCustomComponent(chatId: string, component: ElementType, props: any, showAvatar: boolean): void;
export function renderCustomComponent(chatId: string, component: ElementType, props: any, showAvatar: boolean, id: string): void;

export function toggleMsgLoader(chatId: string): void;
export function toggleWidget(chatId: string): void;
export function toggleInputDisabled(chatId: string): void;
export function dropMessages(chatId: string): void;
export function isWidgetOpened(chatId: string): boolean;
export function setQuickButtons(chatId: string, buttons: Array<{ label: string, value: string | number }>): void;
export function resetBehavior(chatId: string): void;

export function deleteMessages(chatId: string, count: number): void;
export function deleteMessages(chatId: string, count: number, id: string): void;

export function markAllAsRead(chatId: string): void;
export function setBadgeCount(chatId: string, count: number): void;

export as namespace ReactChatWidget;
