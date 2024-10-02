import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle } from '@angular/material/list';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';

@Component({
    selector: 'app-file-list',
    standalone: true,
    imports: [
        MatActionList,
        MatIcon,
        MatListItem,
        MatListItemIcon,
        MatListItemLine,
        MatListItemTitle,
    ],
    templateUrl: './file-list.component.html',
    styleUrl: './file-list.component.css',
})
export class FileListComponent {
    private readonly matDialog = inject(MatDialog);

    readonly documents = input.required<RunDocument[]>();

    open(document: RunDocument) {
        this.matDialog.open(FileDialogComponent, { data: document });
    }
}
