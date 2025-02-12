import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_property_nullable =
    _test_is_stringify(
        "nullable object property",
        ObjectPropertyNullable.generate,
        TSON.createIsStringify<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
