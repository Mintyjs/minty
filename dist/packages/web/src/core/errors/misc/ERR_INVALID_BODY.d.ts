import { SchematicaError } from 'schematica/dist/Schematica';
import WebError from "../WebError";
export default class ERR_INVALID_BODY extends WebError {
    constructor(error: SchematicaError);
}
