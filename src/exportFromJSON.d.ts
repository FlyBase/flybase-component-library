import 'export-from-json';
import {ExportType, IOptions} from "export-from-json";

declare module "export-from-json" {

    interface IOptionCustom<R = void> extends Omit<IOptions<R>, "delimiter"> {
        delimiter?: ',' | ';' | '\t';
    }

    export type ExportFromJSONWithTSVFunction = <R = void,>(options: IOptionCustom<R>) => R;
    export type ExportTypeWithTSV = ExportType | 'tsv';

}