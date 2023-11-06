class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.book = new Array(0)
        this.itemsPerPage = itemsPerPage
        this.items = collection
        let count = 0
        for(let page = 0; page < collection.length/itemsPerPage;page++){
            let tempArr = []
            for(let item = 0;item < itemsPerPage;item++){
                if (collection[item+count] == undefined) break
                tempArr.push(collection[item+count])
            }
            count += itemsPerPage
            this.book.push(tempArr)
        }
	}
	itemCount() {
        return this.items.length
	}
	pageCount() {
        return this.book.length
	}
	pageItemCount(pageIndex) {
        if (this.book[pageIndex] == undefined) return -1
        return this.book[pageIndex].length
	}
	pageIndex(itemIndex) {
        if (itemIndex > this.items.length || itemIndex <= 0 || this.items[itemIndex] == undefined) return -1
        return Math.floor(itemIndex/this.itemsPerPage)
	}
}
var helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 10);
console.log(helper.pageItemCount(0))