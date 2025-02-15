import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_generic_union = _test_assert_equals(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.assertEquals(input),
);
