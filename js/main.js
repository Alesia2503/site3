document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var options = {
        direction: 'top',
        hoverEnabled: true,
        toolbarEnabled: false
    }
    let navElem = document.querySelectorAll('.sidenav');
    let navInstances = M.Sidenav.init(navElem);

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
})

let result = 0;
document.querySelector('.product_ava').onclick = function() {
        if (result == 0) {
            document.querySelector(".product_ava").style.backgroundColor = '#bedd8d';
            result++;
        } else {
            document.querySelector(".product_ava").style.backgroundColor = '#fff';
            result--;
        } 
    }

document.querySelector('.header_btn-find').onclick = function() {
    document.querySelector('.header_p').hidden = !document.querySelector('.header_p').hidden
}

let tooltipElem;
    document.onmouseover = function(e) {
        let target = e.target
        let tooltipHtml = target.dataset.tooltip
        if(!tooltipHtml) return
        tooltipElem = document.createElement('div')
        tooltipElem.className = "tooltip"
        tooltipElem.innerHTML = tooltipHtml
        document.querySelector('.video_flex-left').append(tooltipElem)
        let coords = target.getBoundingClientRect()
        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2
        if(left < 0) left = 5 

        let top = coords.top - tooltipElem.offsetHeight - 5
        if(top < 0) top = coords.top + target.offsetHeight + 5

        tooltipElem.style.left = left + 'px'
        tooltipElem.style.top = top + 'px'
    }
    document.onmouseout = function(e) {
        if(tooltipElem) {
        tooltipElem.remove()
        tooltipElem = null
        }
    }
    
    function addText() {
        alert("Start Trial?")
    }
    document.querySelector('.btn_trial').onclick = addText