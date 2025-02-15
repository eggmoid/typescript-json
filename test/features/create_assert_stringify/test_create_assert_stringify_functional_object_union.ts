import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_functional_object_union =
    _test_assert_stringify(
        "functional union object",
        FunctionalObjectUnion.generate,
        TSON.createAssertStringify<FunctionalObjectUnion>(),
        FunctionalObjectUnion.SPOILERS,
    );
