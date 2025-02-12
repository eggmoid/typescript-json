import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_literal_type = _test_is_clone(
    "object literal",
    () => ObjectLiteralType,
    TSON.createIsClone<typeof ObjectLiteralType>(),
);
