using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.Models.Enums.Main;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("OrderSummary",Schema="dbo")]
    public partial class OrderSummary
    {
		#region OrderSummaryId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion OrderSummaryId Annotations

        public int OrderSummaryId { get; set; }

		#region SubTotal Annotations

        [Required]
		#endregion SubTotal Annotations

        public decimal SubTotal { get; set; }

		#region InternetHandlingFees Annotations

        [Required]
		#endregion InternetHandlingFees Annotations

        public decimal InternetHandlingFees { get; set; }

		#region AmountPayble Annotations

        [Required]
		#endregion AmountPayble Annotations

        public decimal AmountPayble { get; set; }


        public OrderSummary()
        {
        }
	}
}