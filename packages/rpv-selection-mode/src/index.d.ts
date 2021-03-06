/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Component, ReactElement } from 'react';
import { Plugin } from '@phuocng/rpv';

export enum SelectionMode {
    Hand = 'Hand',
    Text = 'Text',
}

export interface RenderSwitchSelectionModeProps {
    isSelected: boolean;
    mode: SelectionMode;
    onClick(): void;
}

export interface SwitchSelectionModeProps {
    children?: (props: RenderSwitchSelectionModeProps) => ReactElement;
    mode: SelectionMode;
}

export interface SwitchSelectionModeMenuItemProps {
    mode: SelectionMode;
    onClick(): void;
}

export interface SelectionModePlugin extends Plugin {
    SwitchSelectionMode(props: SwitchSelectionModeProps): ReactElement;
    SwitchSelectionModeMenuItem(props: SwitchSelectionModeMenuItemProps): ReactElement;
}

export default function selectionModePlugin(props?: {
    selectionMode?: SelectionMode,
}): SelectionModePlugin;

// -----
// Icons
// -----

export class HandToolIcon extends Component<{}> {}
export class TextSelectionIcon extends Component<{}> {}
