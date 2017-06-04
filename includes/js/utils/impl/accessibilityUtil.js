'use strict'

let accessibilityUtilInstance = null;
class AccessibilityUtil extends Util {
    constructor() {
        super();
        if (!accessibilityUtilInstance) {
            accessibilityUtilInstance = this;
        }
        return accessibilityUtilInstance;
    }

    initAccessibility(){


    }

}