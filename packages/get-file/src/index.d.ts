/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Component, ReactElement } from 'react';
import { OpenFile, Plugin } from '@react-pdf-viewer/core';

export interface RenderDownloadProps {
    onClick(): void;
}

export interface DownloadProps {
    children?(props: RenderDownloadProps): ReactElement;
}

export interface GetFilePlugin extends Plugin {
    Download(props: DownloadProps): ReactElement;
    DownloadButton(): ReactElement;
}

export interface GetFilePluginProps {
    // Custom the download file name
    fileNameGenerator?: (file: OpenFile) => string;
}

export function getFilePlugin(props?: GetFilePluginProps): GetFilePlugin;

export class DownloadIcon extends Component {}
