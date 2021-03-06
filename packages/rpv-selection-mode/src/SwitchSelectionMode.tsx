/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { FC, ReactElement } from 'react';
import { Store } from '@phuocng/rpv';

import SelectionMode from './SelectionMode';
import StoreProps from './StoreProps';
import SwitchSelectionModeButton from './SwitchSelectionModeButton';

export interface RenderSwitchSelectionModeProps {
    isSelected: boolean;
    mode: SelectionMode;
    onClick(): void;
}

type RenderSwitchSelectionMode = (props: RenderSwitchSelectionModeProps) => ReactElement;

export interface SwitchSelectionModeProps {
    children?: RenderSwitchSelectionMode;
    mode: SelectionMode;
}

const SwitchSelectionMode: FC<{
    children?: RenderSwitchSelectionMode,
    mode: SelectionMode,
    store: Store<StoreProps>,
}> = ({ children, mode, store }) => {
    const onClick = () => store.update('selectionMode', mode);

    const isSelected = mode === store.get('selectionMode');

    const defaultChildren = (props: RenderSwitchSelectionModeProps) => (
        <SwitchSelectionModeButton isSelected={isSelected} mode={props.mode} onClick={props.onClick} />
    );
    const render = children || defaultChildren;

    return render({
        isSelected,
        mode,
        onClick,
    });
};

export default SwitchSelectionMode;
