/**
 * What the generated bindings are supposed to say about an enum, as code the compiler checks.
 *
 * The SDK declares its enums as ints, so the android typings spell every enum-typed accessor
 * `number`. These lines are what keeps the recovered type from silently degrading back to that.
 *
 * Every `@ts-expect-error` is a NEGATIVE test: if the line stops being an error, tsc fails.
 *
 * Run with `npm run bindings.check`.
 */
import { Accessors as OptionsAccessors, Methods as OptionsMethods } from '../../../../src/ui-massifmaps/bindings/components/Options';
import { FreeRoamMode, PivotMode } from '../../../../src/ui-massifmaps/bindings/enums';
import { PanningMode } from '../../../../src/ui-massifmaps/ui/index';

declare const options: OptionsAccessors & OptionsMethods;

// an enum the plugin declares by hand keeps ITS type - the members are nominal, so a generated
// second declaration would not be assignable here
options.panningMode = PanningMode.PANNING_MODE_STICKY;
options.setPanningMode(PanningMode.PANNING_MODE_FREE);

// one the plugin does not declare comes from the generated module instead of being `number`
options.pivotMode = PivotMode.PIVOT_MODE_CENTERPOINT;
options.setFreeRoamMode(FreeRoamMode.FREE_ROAM_MODE_LOOK);

// the raw number the value actually is at runtime stays legal - EnumValue<E>, not a bare E
options.setPivotMode(1);
options.freeRoamMode = 2;

// reading hands back the enum, not a widened number
const mode: PanningMode = options.getPanningMode();
const pivot: PivotMode = options.pivotMode as PivotMode;
const asNumber: number = options.getPivotMode();
void mode;
void pivot;
void asNumber;

// `Omit<Accessors, ...>` is how the plugin builds its public interfaces, and a mapped type must
// not turn an enum property read-only
declare const trimmed: Omit<OptionsAccessors, 'fogOptions'>;
trimmed.panningMode = PanningMode.PANNING_MODE_STICKY_FINAL;
trimmed.pivotMode = 0;

// @ts-expect-error the constant's NAME is not the value - that is the facade API's spelling
options.panningMode = 'PANNING_MODE_FREE';

// @ts-expect-error and nothing that is not a number at all
options.setPivotMode(true);
