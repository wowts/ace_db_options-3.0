import { AceDatabase } from "@wowts/ace_db-3.0";
import { LuaObj, pairs } from "@wowts/lua";
import { Constructor, Library} from "@wowts/tslib";

const lib = {
    GetOptionsTable(db: AceDatabase): any {
        return {};
    },
};

export default lib;
