/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Directive } from '@angular/core';

/**
 * Overlay directive to be used alongside with StackedSeriesChart.
 *
 * @example
 * <ng-template dtStackedSeriesChartOverlay let-tooltip>
 *   <!-- [content of overlay here] -->
 * </ng-template>
 */
@Directive({
  selector: 'ng-template[dtStackedSeriesChartOverlay]',
  exportAs: 'dtStackedSeriesChartOverlay',
})
export class DtStackedSeriesChartOverlay {}

/**
 * Overlay directive to be used alongside with StackedSeriesChart.
 *
 * @example
 * <ng-template dtStackedSeriesChartHeatFieldOverlay let-heatField>
 *   <!-- [content of overlay here] -->
 * </ng-template>
 */
@Directive({
  selector: 'ng-template[dtStackedSeriesChartHeatFieldOverlay]',
})
export class DtStackedSeriesChartHeatFieldOverlay {}
