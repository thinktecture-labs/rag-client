import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';

@Component({
    selector: 'app-file-dialog',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
    templateUrl: './file-dialog.component.html',
    styleUrl: './file-dialog.component.css',
})
export class FileDialogComponent {
    readonly document: RunDocument = inject(MAT_DIALOG_DATA);
}
