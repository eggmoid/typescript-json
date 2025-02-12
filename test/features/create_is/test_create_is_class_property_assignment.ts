import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is } from "./../is/_test_is";

export const test_create_is_class_property_assignment = _test_is(
    "property assigned class",
    ClassPropertyAssignment.generate,
    TSON.createIs<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
