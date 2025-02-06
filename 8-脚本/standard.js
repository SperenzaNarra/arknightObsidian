class standardMethod {
    hasSubstringMatch(arr1, arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)){
            for (const s of arr1) 
                if (arr2.includes(s)) return true;
        }
        return false;
    }
}