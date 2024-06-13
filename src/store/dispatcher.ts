import { ElementType } from 'react';

import store from '.';
import * as actions from './actions';
import { LinkParams, ImageState } from './types';

export function addUserMessage(chatId: string, text: string, id?: string) {
  store.dispatch(actions.addUserMessage(chatId, text, id));
}

export function addOlderMessages(chatId: string, component: ElementType, props: any, showAvatar = false, id?: string) {
  store.dispatch(actions.addOlderMessages(chatId, component, props, showAvatar, id));
}

export function addResponseMessage(chatId: string, text: string, id?: string) {
  store.dispatch(actions.addResponseMessage(chatId, text, id));
}

export function addLinkSnippet(chatId: string, link: LinkParams, id?: string) {
  store.dispatch(actions.addLinkSnippet(chatId, link, id));
}

export function toggleMsgLoader(chatId: string) {
  store.dispatch(actions.toggleMsgLoader(chatId));
}

export function resetBehavior(chatId: string) {
  store.dispatch(actions.resetBehavior(chatId));
}

export function renderCustomComponent(chatId: string, component: ElementType, props: any, showAvatar = false, id?: string) {
  store.dispatch(actions.renderCustomComponent(chatId, component, props, showAvatar, id));
}

export function toggleWidget(chatId: string) {
  store.dispatch(actions.toggleChat(chatId));
}

export function toggleInputDisabled(chatId: string) {
  store.dispatch(actions.toggleInputDisabled(chatId));
}

export function dropMessages(chatId: string) {
  store.dispatch(actions.dropMessages(chatId));
}

export function isWidgetOpened(chatId: string): boolean {
  return store.getState().behavior[chatId].showChat;
}

export function setQuickButtons(chatId: string, buttons: Array<{ label: string, value: string | number }>) {
  store.dispatch(actions.setQuickButtons(chatId, buttons));
}

export function deleteMessages(chatId: string, count: number, id?: string) {
  store.dispatch(actions.deleteMessages(chatId, count, id));
}

export function markAllAsRead(chatId: string) {
  store.dispatch(actions.markAllMessagesRead(chatId));
}

export function setBadgeCount(chatId: string, count: number) {
  store.dispatch(actions.setBadgeCount(chatId, count));
}

export function openFullscreenPreview(payload: ImageState) {
  store.dispatch(actions.openFullscreenPreview(payload));
}

export function closeFullscreenPreview() {
  store.dispatch(actions.closeFullscreenPreview());
}
