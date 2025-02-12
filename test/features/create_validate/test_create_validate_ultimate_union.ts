import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_ultimate_union = _test_validate(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createValidate<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
