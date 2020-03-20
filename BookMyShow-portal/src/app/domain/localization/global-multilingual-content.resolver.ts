import { Injectable } from '@angular/core';
import { BaseMultilingualContentResolver } from './base-multilingual-content.resolver';
import { BrowserStorage } from '../services/browser-storage';

@Injectable({
    providedIn: 'root',
})
export class GlobalMultilingualContentResolver extends BaseMultilingualContentResolver {
    constructor(browserStorage: BrowserStorage) {
        super(browserStorage, true);
    }
}
