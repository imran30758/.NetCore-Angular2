﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core4.Controllers.Resources
{
    public class QueryResultResource<T>
    {

        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
