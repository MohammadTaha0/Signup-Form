$(document).ready(function () {

$(".dots").click(function () {
    $(".dots").removeClass('active')
    $(this).addClass('active');
    id = $(this).data('id');
    $(".slid_box").fadeOut('500');
    setTimeout(() => {
        $(".slid_box").removeClass('active');
    }, 600);
    setTimeout(() => {
        $("#"+id).fadeIn()
        $("#"+id).addClass('active')
    }, 500);
})







    let skill = []
    $(".d_flex label").click(function () {
        $(".d_flex label").removeClass('active')
        $(this).addClass('active');
    })

    $(".skills_mn_cont input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#search_cont li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if (value != '') {
            $(".search_cont").addClass('active')
        }
        else {
            $(".search_cont").removeClass('active')
        }
    });
    $("#search_cont li").click(function () {
        val = $(this).html();
        skill.push(val)
        s_skil = skill.map(ski => `<span class="span_skills">${ski} <i class="fa-solid fa-times"></i></span>`)
        $(".span_skills_cont").html(s_skil);
        $(".skills_mn_cont input").val('')
        $(".search_cont").removeClass('active')
        if (skill.length > 2) {
            $(".skills_mn_cont input").attr('disabled', 'disabled')
            $(".skills_mn_cont input").attr('placeholder', 'max 3 skills')
        }
    })
    $("#create").click(function () {
        email = $("#email").val()
        pass = $("#pass").val()
        if(email.indexOf('@') != email.length-10)
        {
            if( email.indexOf('@') != email.length-12)
            {
                alert("Email Should be gmail or outlook")
            }
        }
        else if(email.indexOf('.') != email.length-4)
        {
            alert("Invalid Email")
        }
        else if(pass.length < 8)
        {
            alert("Atlest 8 Chrachters")
        }
        else if(skill.length == 0)
        {
            alert("Skills Are Compulsory")
        }
        else{
            alert("Account Successfully Created")
        }
    })

})
skills = [
    'Algorithms',
    'Analytical Skills',
    'Big Data',
    'Calculating',
    'Compiling Statistics',
    'Data Analytics',
    'Data Mining',
    'Database Design',
    'Database Management',
    'Documentation',
    'Modeling',
    'Modification',
    'Needs Analysis',
    'Quantitative Research',
    'Quantitative Reports',
    'Statistical Analysis',
    'Applications',
    'Certifications',
    'Coding',
    'Computing',
    'Configuration',
    'Customer Support',
    'Debugging',
    'Design',
    'Development',
    'Hardware',
    'Implementation',
    'Information Technology',
    'Infrastructure',
    'Languages',
    'Maintenance',
    'Network Architecture',
    'Network Security',
    'Networking',
    'New Technologies',
    'Operating Systems',
    'Programming',
    'Restoration',
    'Security',
    'Servers',
    'Software',
    'Solution Delivery',
    'Storage',
    'Structures',
    'Systems Analysis',
    'Technical Support',
    'Technology',
    'Testing',
    'Tools',
    'Training',
    'Troubleshooting',
    'Usability',
    'Benchmarking',
    'Budget Planning',
    'Engineering',
    'Fabrication',
    'Following Specifications',
    'Operations',
    'Performance Review',
    'Project Planning',
    'Quality Assurance',
    'Quality Control',
    'Scheduling',
    'Task Delegation',
    'Task Management',
    'Blogging',
    'Digital Photography',
    'Digital Media',
    'Facebook',
    'Instagram',
    'Networking',
    'Pinterest',
    'SEO',
    'Social Media Platforms',
    'Twitter',
    'Web Analytics',
    'Client Relations',
    'Email',
    'Requirements Gathering',
    'Research',
    'Subject Matter Experts (SMEs)',
    'Technical Documentation'
];
var parent = document.getElementById("search_cont");


for (key in skills) {
    var li = document.createElement("li")
    li.innerHTML = skills[key];
    parent.append(li)

}
