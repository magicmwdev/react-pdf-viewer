/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { FC, useContext } from 'react';
import { Button, LocalizationContext, Position, Tooltip } from '@react-pdf-viewer/core';

import InfoIcon from './InfoIcon';
import { RenderShowPropertiesProps } from './ShowProperties';

const TOOLTIP_OFFSET = { left: 0, top: 8 };

const ShowPropertiesButton: FC<RenderShowPropertiesProps> = ({ onClick }) => {
    const l10n = useContext(LocalizationContext);
    const label = l10n && l10n.properties ? l10n.properties.showProperties : 'Show properties';

    return (
        <Tooltip
            position={Position.BottomCenter}
            target={<Button onClick={onClick}><InfoIcon /></Button>}
            content={() => label}
            offset={TOOLTIP_OFFSET}
        />
    );
};

export default ShowPropertiesButton;
