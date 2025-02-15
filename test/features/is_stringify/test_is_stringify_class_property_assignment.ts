import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_class_property_assignment = _test_is_stringify(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.isStringify(input),
    ClassPropertyAssignment.SPOILERS,
);
