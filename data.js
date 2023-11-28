const partyColor = {
    "民主進步黨": {
        "primary": "#84CB98",
        "second": "#6AA27A",
        "third": "#EDF7F0",
    },
    "中國國民黨": {
        "primary": "#8894D8",
        "second": "#6D76AD",
        "third": "#EDEFF9",
    },
    "親民黨": {
        "primary": "#DFA175",
        "second": "#B2815E",
        "third": "#FAF1EA",
    },
}

const cand = {
    "民主進步黨": {
        "cand_no": 1,
        "party_name": "民主進步黨",
        "cand_name": ["蔡英文","賴清德"],
    },
    "中國國民黨": {
        "cand_no": 2,
        "party_name": "中國國民黨",
        "cand_name": ["韓國瑜","張善政"],
    },
    "親民黨": {
        "cand_no": 3,
        "party_name": "親民黨",
        "cand_name": ["宋楚瑜","余湘"],
    },
}

const countryData = [
    {
        "cand_no": 3,
        "ticket_num": 8170231,
        "ticket_percent": 57.13,
        "area_name": "全國",
        "cand_id": [8081,8082],
        "cand_name": ["蔡英文","賴清德"],
        "party_code": 16,
        "party_name": "民主進步黨",
        "is_current": "Y",
        "is_vice": [" ","Y"]
    },
    {
        "cand_no": 2,
        "ticket_num": 5522119,
        "ticket_percent": 38.61,
        "area_name": "全國",
        "cand_id": [8079,8080],
        "cand_name": ["韓國瑜","張善政"],
        "party_code": 1,
        "party_name": "中國國民黨",
        "is_current": "N",
        "is_vice": [" ","Y"]
    },
    {
        "cand_no": 1,
        "ticket_num": 608590,
        "ticket_percent": 4.26,
        "area_name": "全國",
        "cand_id": [8077,8078],
        "cand_name": ["宋楚瑜","余湘"],
        "party_code": 90,
        "party_name": "親民黨",
        "is_vice": [" ","Y"]
    },
]

const countryData2 = [
    {
        "theme_id": "1f7d9f4f6bfe06fdaf4db7df2ed4d60c",
        "vote_date": "2020-01-11",
        "area_name": "全國",
        "party_code": 90,
        "party_name": "親民黨",
        "joint_no": null,
        "ticket_num": 608590,
        "ticket_percent": 4.2556
    },
    {
        "theme_id": "1f7d9f4f6bfe06fdaf4db7df2ed4d60c",
        "vote_date": "2020-01-11",
        "area_name": "全國",
        "party_code": 1,
        "party_name": "中國國民黨",
        "joint_no": null,
        "ticket_num": 5522119,
        "ticket_percent": 38.6137
    },
    {
        "theme_id": "1f7d9f4f6bfe06fdaf4db7df2ed4d60c",
        "vote_date": "2020-01-11",
        "area_name": "全國",
        "party_code": 16,
        "party_name": "民主進步黨",
        "joint_no": null,
        "ticket_num": 8170231,
        "ticket_percent": 57.1307
    },
]

const overview = {
    "ticket_num": 14464571,
    "ticket_percent": 74.9,
    "invalid": 163631,
    "valid": 14300940,
}


export { partyColor, cand, countryData, countryData2, overview };
